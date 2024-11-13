import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { bannerServices } from './banner.service';

const createBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await bannerServices.createBanner(req.body);
    console.log(result)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Banner create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await bannerServices.getAllBanner(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Banner are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleBanner = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await bannerServices.getSinigleBanner(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Banner is retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await bannerServices.deleteBanner(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Banner deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await bannerServices.updateBanner(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Banner update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const bannerControllers = {
  getAllBanner,
  getSingleBanner,
  deleteBanner,
  updateBanner,
   createBanner,
};
