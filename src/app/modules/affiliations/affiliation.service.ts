/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { projectSearchableField } from '../projects/project.constant';
import { TAffiliation } from './affiliation.interface';
import { Affiliation } from './affiliation.model';

const createAffiliation = async (payload: TAffiliation) => {
  const result = await Affiliation.create(payload);
  return result;
};

const getAllAffiliation = async (query: Record<string, unknown>) => {
  const affiliationQuery = new QueryBuilder(Affiliation.find(), query)
    .search(projectSearchableField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await affiliationQuery.countTotal();
  const affilations = await affiliationQuery.modelQuery;

  return {
    meta,
    affilations,
  };
};
const getSinigleAffiliation = async (id: string) => {
  const result = await Affiliation.findById(id);
  return result;
};
const updateAffiliation = async (
  id: string,
  payload: Partial<TAffiliation>,
) => {
  const result = await Affiliation.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteAffiliation = async (id: string) => {
  const result = await Affiliation.deleteOne({ _id: id });

  return result;
};

export const affiliationServices = {
  createAffiliation,
  getAllAffiliation,
  getSinigleAffiliation,
  updateAffiliation,
  deleteAffiliation,
};
