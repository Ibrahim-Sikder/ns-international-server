/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { serviceSearch } from './service.constant';
import { TCategory } from './service.interface';
import { ServicesCategory } from './service.model';

const createServiceCategory = async (payload: TCategory) => {
  const result = await ServicesCategory.create(payload);
  return result;
};

const getAllServiceCategory = async (query: Record<string, unknown>) => {
  const serviceCategoryQuery = new QueryBuilder(ServicesCategory.find(), query)
    .search(serviceSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await serviceCategoryQuery.countTotal();
  const serviceCategories = await serviceCategoryQuery.modelQuery;

  return {
    meta,
    serviceCategories,
  };
};

const deleteServiceCategory = async (id: string) => {
  const result = await ServicesCategory.deleteOne({ _id: id });
  return result;
};

export const serviceCategories = {
  createServiceCategory,
  getAllServiceCategory,
  deleteServiceCategory,
};
