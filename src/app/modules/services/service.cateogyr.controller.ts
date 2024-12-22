import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { serviceCategories } from './service.category.service';

const createServicesCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await serviceCategories.createServiceCategory(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'ServicesCategory create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllServicesCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await serviceCategories.getAllServiceCategory(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'ServicesCategory are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteServicesCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await serviceCategories.deleteServiceCategory(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'ServicesCategory deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const serviceCategoriesControllers = {
  getAllServicesCategory,
  deleteServicesCategory,
  createServicesCategory,
};
