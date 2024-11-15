import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { missionServices } from './mission.service';

const createMission = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await missionServices.createMission(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Mission create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllMission = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await missionServices.getAllMission(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Mission are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleMission = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await missionServices.getSinigleMission(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Mission is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteMission = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await missionServices.deleteMission(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Mission deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateMission = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await missionServices.updateMission(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Mission update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const missionControllers = {
  getAllMission,
  getSingleMission,
  deleteMission,
  updateMission,
  createMission,
};
