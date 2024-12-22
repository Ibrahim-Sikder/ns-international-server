/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { serviceSearch } from '../services/service.constant';
import { TProductCategory } from './products.interface';
import { productCategory } from './products.model';

const createProductCategory = async (payload: TProductCategory) => {
  const result = await productCategory.create(payload);
  return result;
};

const getAllProductCategory = async (query: Record<string, unknown>) => {
  const serviceCategoryQuery = new QueryBuilder(productCategory.find(), query)
    .search(serviceSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await serviceCategoryQuery.countTotal();
  const productCategories = await serviceCategoryQuery.modelQuery;

  return {
    meta,
    productCategories,
  };
};

const deleteProductCategory = async (id: string) => {
  const result = await productCategory.deleteOne({ _id: id });
  return result;
};

export const productCategoriesServices = {
  createProductCategory,
  getAllProductCategory,
  deleteProductCategory,
};
