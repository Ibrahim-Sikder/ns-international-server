import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { aboutServices } from './about.service';

const createAbout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await aboutServices.createAbout(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'About create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllAbout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await aboutServices.getAllAbout(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'About are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleAbout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await aboutServices.getSinigleAbout(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'About is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteAbout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await aboutServices.deleteAbout(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'About deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateAbout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await aboutServices.updateAbout(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'About update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const aboutControllers = {
  getAllAbout,
  getSingleAbout,
  deleteAbout,
  updateAbout,
  createAbout,
};
