import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { missionValidations } from './mission.validation';
import { missionControllers } from './mission.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(missionValidations.createMission),
  missionControllers.createMission,
);
router.get('/', missionControllers.getAllMission);
router.get('/:id', missionControllers.getSingleMission);
router.delete('/:id', missionControllers.deleteMission);
router.patch(
  '/:id',
  validateRequest(missionValidations.updateMission),
  missionControllers.updateMission,
);

export const missionRoutes = router;
