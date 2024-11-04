/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { brandSearch } from './brand.constant';
import { TBrand } from './brand.interface';
import { Brand } from './brand.model';

const createBrand = async (payload: TBrand) => {
  const result = await Brand.create(payload);
  return result;
};

const getAllBrand = async (query: Record<string, unknown>) => {
  const brandQuery = new QueryBuilder(Brand.find(), query)
    .search(brandSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await brandQuery.countTotal();
  const brands = await brandQuery.modelQuery;

  return {
    meta,
    brands,
  };
};
const getSinigleBrand = async (id: string) => {
  const result = await Brand.findById(id);
  return result;
};
const updateBrand = async (id: string, payload: Partial<TBrand>) => {
  const result = await Brand.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBrand = async (id: string) => {
  const result = await Brand.deleteOne({ _id: id });

  return result;
};

export const brandServices = {
  createBrand,
  getAllBrand,
  getSinigleBrand,
  updateBrand,
  deleteBrand,
};
