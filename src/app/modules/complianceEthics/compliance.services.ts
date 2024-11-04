/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { complianceSearch } from './compliance.constant';
import { TCompliance } from './compliance.interface';
import { Compliance } from './compliance.model';

const createCompliance = async (payload: TCompliance) => {
  const result = await Compliance.create(payload);
  return result;
};

const getAllCompliance = async (query: Record<string, unknown>) => {
  const brandQuery = new QueryBuilder(Compliance.find(), query)
    .search(complianceSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await brandQuery.countTotal();
  const compliances = await brandQuery.modelQuery;

  return {
    meta,
    compliances,
  };
};
const getSinigleCompliance = async (id: string) => {
  const result = await Compliance.findById(id);
  return result;
};
const updateCompliance = async (id: string, payload: Partial<TCompliance>) => {
  const result = await Compliance.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteCompliance = async (id: string) => {
  const result = await Compliance.deleteOne({ _id: id });

  return result;
};

export const complianceServices = {
  createCompliance,
  getAllCompliance,
  getSinigleCompliance,
  updateCompliance,
  deleteCompliance,
};
