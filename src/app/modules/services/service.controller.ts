import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { nsServices } from './service.services';

const createServices = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await nsServices.createService(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Services create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllServices = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await nsServices.getAllService(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Services are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleServices = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await nsServices.getSinigleService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Services is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteServices = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await nsServices.deleteService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Services deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateServices = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await nsServices.updateService(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Services update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const serviceControllers = {
  getAllServices,
  getSingleServices,
  deleteServices,
  updateServices,
  createServices,
};
