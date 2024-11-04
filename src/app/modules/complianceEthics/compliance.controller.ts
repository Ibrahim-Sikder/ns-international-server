import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { complianceServices } from './compliance.services';

const createCompliance = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await complianceServices.createCompliance(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Compliance create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllCompliance = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await complianceServices.getAllCompliance(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Compliance are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleCompliance = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await complianceServices.getSinigleCompliance(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Compliance is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteCompliance = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await complianceServices.deleteCompliance(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Compliance deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateCompliance = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await complianceServices.updateCompliance(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Compliance update successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const complianceControllers = {
  getAllCompliance,
  getSingleCompliance,
  deleteCompliance,
  updateCompliance,
  createCompliance,
};
