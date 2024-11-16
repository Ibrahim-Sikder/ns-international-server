/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';

import { AppError } from '../../error/AppError';
import QueryBuilder from '../../builder/QueryBuilder';
import { TWhoWeAre } from './whoweare.interface';
import { WhoWeAre } from './whoweare.model';
import { whowWeAreSearch } from './whoweare.constant';
const createWhoWeAre = async (payload: TWhoWeAre) => {
  const newFaq = await WhoWeAre.create(payload);
  return newFaq;
};

const getAllWhoWeAre = async (query: Record<string, unknown>) => {
  const whoweareQuery = new QueryBuilder(WhoWeAre.find(), query)
    .search(whowWeAreSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await whoweareQuery.countTotal();
  const whoweares = await whoweareQuery.modelQuery;

  return {
    meta,
    whoweares,
  };
};

const updateWhoWeAre = async (id: string, payload: Partial<TWhoWeAre>) => {
  const result = await WhoWeAre.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteWhoWeAre = async (id: string) => {
  const faq = await WhoWeAre.findByIdAndDelete(id);

  if (!faq) {
    throw new AppError(StatusCodes.NOT_FOUND, 'No faq available');
  }

  return faq;
};
const getSinigleWhoWeAre = async (id: string) => {
  const result = await WhoWeAre.findById(id);
  return result;
};

export const whowWeAreServices = {
  createWhoWeAre,
  getAllWhoWeAre,
  updateWhoWeAre,
  deleteWhoWeAre,
  getSinigleWhoWeAre,
};
