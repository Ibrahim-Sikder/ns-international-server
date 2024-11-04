/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { aboutSearch } from './about.constant';
import { TAbout } from './about.interface';
import { About } from './about.model';

const createAbout = async (payload: TAbout) => {
  const result = await About.create(payload);
  return result;
};

const getAllAbout = async (query: Record<string, unknown>) => {
  const aboutQuery = new QueryBuilder(About.find(), query)
    .search(aboutSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await aboutQuery.countTotal();
  const abouts = await aboutQuery.modelQuery;

  return {
    meta,
    abouts,
  };
};
const getSinigleAbout = async (id: string) => {
  const result = await About.findById(id);
  return result;
};
const updateAbout = async (id: string, payload: Partial<TAbout>) => {

  const result = await About.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteAbout = async (id: string) => {
  const result = await About.deleteOne({ _id: id });

  return result;
};

export const aboutServices = {
  createAbout,
  getAllAbout,
  getSinigleAbout,
  updateAbout,
  deleteAbout,
};
