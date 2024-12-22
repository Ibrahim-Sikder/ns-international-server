/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { productSearch } from './products.constant';
import { TProduct } from './products.interface';
import { Product } from './products.model';

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProduct = async (query: Record<string, unknown>) => {
  const aboutQuery = new QueryBuilder(Product.find(), query)
    .search(productSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await aboutQuery.countTotal();
  const products = await aboutQuery.modelQuery.populate([
    {
      path: 'category',
      select: 'name',
    },
  ]);

  return {
    meta,
    products,
  };
};
const getSinigleProduct = async (id: string) => {
  const result = await Product.findById(id).populate([
    {
      path: 'category',
      select: 'name',
    },
  ]);
  return result;
};
const updateProduct = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });

  return result;
};

export const productServices = {
  createProduct,
  getAllProduct,
  getSinigleProduct,
  updateProduct,
  deleteProduct,
};
