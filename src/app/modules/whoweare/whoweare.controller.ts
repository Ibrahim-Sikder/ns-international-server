import { StatusCodes } from 'http-status-codes';


import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { whowWeAreServices } from './whoweare.service';

const createWhoWeAre = catchAsync(async (req, res) => {
  const faq = await whowWeAreServices.createWhoWeAre(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'WhoWeAre created successful!',
    data: faq,
  });
});



const getAllWhoWeAre = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await whowWeAreServices.getAllWhoWeAre(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'WhoWeAre are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const updateWhoWeAre = catchAsync(async (req, res) => {
  const { id } = req.params;

  const service = await whowWeAreServices.updateWhoWeAre(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'WhoWeAre update successful!',
    data: service,
  });
});
const deleteWhoWeAre = catchAsync(async (req, res) => {
  const { id } = req.params;

  const service = await whowWeAreServices.deleteWhoWeAre(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'WhoWeAre deleted successful!',
    data: service,
  });
});
const getSingleWhoWeAre = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await whowWeAreServices.getSinigleWhoWeAre(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'WhoWeAre is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const WhoWeAreController = {
  createWhoWeAre,
  getAllWhoWeAre,
  updateWhoWeAre,
  deleteWhoWeAre,
  getSingleWhoWeAre
};
