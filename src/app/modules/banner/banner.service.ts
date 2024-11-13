/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { bannerSearch } from './banner.constant';

import { TBanner } from './banner.interface';
import { Banner } from './banner.model';

const createBanner = async (payload: TBanner) => {
  const result = await Banner.create(payload);
  return result;
};

const getAllBanner = async (query: Record<string, unknown>) => {
  const bannerQuery = new QueryBuilder(Banner.find(), query)
    .search(bannerSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await bannerQuery.countTotal();
  const banners = await bannerQuery.modelQuery;

  return {
    meta,
    banners,
  };
};
const getSinigleBanner = async (id: string) => {
  const result = await Banner.findById(id);
  return result;
};
const updateBanner = async (id: string, payload: Partial<TBanner>) => {
  const result = await Banner.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBanner = async (id: string) => {
  const result = await Banner.deleteOne({ _id: id });
  return result;
};

export const bannerServices = {
  createBanner,
  getAllBanner,
  getSinigleBanner,
  updateBanner,
  deleteBanner,
};
