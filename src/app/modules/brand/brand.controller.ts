import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { brandServices } from './brand.service';

const createBrand = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await brandServices.createBrand(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Brand create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllBrand = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await brandServices.getAllBrand(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Brand are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleBrand = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await brandServices.getSinigleBrand(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Brand is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteBrand = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await brandServices.deleteBrand(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Brand deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateBrand = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await brandServices.updateBrand(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Brand update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const brandControllers = {
  getAllBrand,
  getSingleBrand,
  deleteBrand,
  updateBrand,
  createBrand,
};
