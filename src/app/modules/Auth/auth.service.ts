/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import { AppError } from '../../error/AppError';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';
import config from '../../config';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { sendEmail } from '../../../utils/sendEmail';
import { User } from '../user/user.model';

const loginUser = async (payload: TLoginUser) => {
  console.log(payload.name)
  const user = await User.isUserExistsByCustomId(payload.name);
  console.log(user)
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'Invalid user name or password');
  }
  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This account has been deleted!');
  }


  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Invalid user name or password');
  }

  const JwtPayload = {
    userId: user?._id as unknown as string,
    role: user?.role,
    name: user?.name,
  };

  const accessToken = createToken(
    JwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    JwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
    user: {
      userId: user._id,
      name: user.name,
      role: user.role,
      token: accessToken,
    },
  };
};

const changePassword = async (
  userData: JwtPayload,
  payload: { oldPassword: string; newPassword: string },
) => {
  
  const user = await User.isUserExistsByCustomId(userData.userId);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found ');
  }

  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is deleted!');
  }


  if (!(await User.isPasswordMatched(payload?.oldPassword, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
  }

  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_round),
  );

  const result = await User.findOneAndUpdate(
    {
      id: userData.userId,
      role: userData.role,
    },
    {
      password: newHashedPassword,
      needsPasswordChange: false,
      passwordChangedAt: new Date(),
    },
  );

  return result;
};
const forgetPassword = async (userId: string) => {
  const user = await User.isUserExistsByCustomId(userId);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user not found');
  }
  const isdeleted = user?.isDeleted;
  if (isdeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user has been delete!');
  }


  const jwtPayload = {
    userId: user.email,
    role: user.role,
  };

  const resetToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    '10m',
  );

  const resetUILink = `${config.reset_pass_uiLink}?id=${user.email}$token=${resetToken}`;

  sendEmail(user.email, resetUILink);

  return resetUILink;
};

const resetPassword = async (
  paylload: { id: string; newPassword: string },
  token: string,
) => {
  const user = await User.isUserExistsByCustomId(paylload.id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user not found');
  }
  const isdeleted = user?.isDeleted;
  if (isdeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user has been delete!');
  }


  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload;

  if (paylload.id !== decoded.userId) {
    throw new AppError(httpStatus.FORBIDDEN, 'You are forbidden');
  }

  const newHashedPassword = await bcrypt.hash(
    paylload.newPassword,
    Number(config.bcrypt_salt_round),
  );

  await User.findOneAndUpdate(
    {
      id: decoded.userId,
      role: decoded.role,
    },
    {
      password: newHashedPassword,
      needPasswordChange: false,
      passwordChangeAt: new Date(),
    },
  );
};

export const AuthServices = {
  loginUser,
  changePassword,
  forgetPassword,
  resetPassword,
};
