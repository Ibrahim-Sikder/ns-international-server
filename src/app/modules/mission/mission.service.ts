/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { missionSearch } from './mission.constant';
import { TMission } from './mission.interface';
import { Mission } from './mission.model';

const createMission = async (payload: TMission) => {
  const result = await Mission.create(payload);
  return result;
};

const getAllMission = async (query: Record<string, unknown>) => {
  const aboutQuery = new QueryBuilder(Mission.find(), query)
    .search(missionSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await aboutQuery.countTotal();
  const missions = await aboutQuery.modelQuery;

  return {
    meta,
    missions,
  };
};
const getSinigleMission = async (id: string) => {
  const result = await Mission.findById(id);
  return result;
};
const updateMission = async (id: string, payload: Partial<TMission>) => {
  const result = await Mission.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteMission = async (id: string) => {
  const result = await Mission.deleteOne({ _id: id });

  return result;
};

export const missionServices = {
  createMission,
  getAllMission,
  getSinigleMission,
  updateMission,
  deleteMission,
};
