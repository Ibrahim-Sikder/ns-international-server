import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { affiliationServices } from './affiliation.service';

const createAffiliation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await affiliationServices.createAffiliation(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Affiliation create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllAffiliation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await affiliationServices.getAllAffiliation(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Affiliation are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleAffiliation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await affiliationServices.getSinigleAffiliation(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Affiliation is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteAffiliation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await affiliationServices.deleteAffiliation(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Affiliation deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateAffiliation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await affiliationServices.updateAffiliation(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Affiliation update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const affiliationControllers = {
  getAllAffiliation,
  getSingleAffiliation,
  deleteAffiliation,
  updateAffiliation,
  createAffiliation,
};
