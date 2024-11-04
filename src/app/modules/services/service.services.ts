/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { serviceSearch } from './service.constant';
import { TServices } from './service.interface';
import { Services } from './service.model';

const createService = async (payload: TServices) => {
  const result = await Services.create(payload);
  return result;
};

const getAllService = async (query: Record<string, unknown>) => {
  const aboutQuery = new QueryBuilder(Services.find(), query)
    .search(serviceSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await aboutQuery.countTotal();
  const services = await aboutQuery.modelQuery;

  return {
    meta,
    services,
  };
};
const getSinigleService = async (id: string) => {
  const result = await Services.findById(id);
  return result;
};
const updateService = async (id: string, payload: Partial<TServices>) => {
  const result = await Services.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteService = async (id: string) => {
  const result = await Services.deleteOne({ _id: id });
  return result;
};

export const nsServices = {
  createService,
  getAllService,
  getSinigleService,
  updateService,
  deleteService,
};
