import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { missionValidations } from './mission.validation';
import { missionControllers } from './mission.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin','super_admin'),
  validateRequest(missionValidations.createMission),
  missionControllers.createMission,
);
router.get('/', missionControllers.getAllMission);
router.get('/:id', missionControllers.getSingleMission);
router.delete('/:id', auth('admin','super_admin'), missionControllers.deleteMission);
router.patch(
  '/:id',
  auth('admin','super_admin'),
  validateRequest(missionValidations.updateMission),
  missionControllers.updateMission,
);

export const missionRoutes = router;
