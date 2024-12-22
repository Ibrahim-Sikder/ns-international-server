import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { productCategoriesServices } from './product.category.service';

const createProductCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await productCategoriesServices.createProductCategory(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product category create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllProductCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await productCategoriesServices.getAllProductCategory(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product category are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteProductCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await productCategoriesServices.deleteProductCategory(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product category deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const productCategoriesControllers = {
  getAllProductCategory,
  deleteProductCategory,
  createProductCategory,
};
