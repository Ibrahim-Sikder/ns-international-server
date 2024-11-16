import express from 'express';

import { validateRequest } from '../../middlewares/validateRequest';
import { WhoWeAreController } from './whoweare.controller';
import { whoWeAreValidatons } from './whoweare.validation';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin', 'super_admin'),
  validateRequest(whoWeAreValidatons.createWhoWeAreValidationSchema),
  WhoWeAreController.createWhoWeAre,
);
router.get('/', WhoWeAreController.getAllWhoWeAre);
router.get('/:id', WhoWeAreController.getSingleWhoWeAre);
router.delete(
  '/:id',
  auth('admin', 'super_admin'),
  WhoWeAreController.deleteWhoWeAre,
);
router.patch(
  '/:id',
  auth('admin', 'super_admin'),
  validateRequest(whoWeAreValidatons.updateWhoWeAreValidationSchema),
  WhoWeAreController.updateWhoWeAre,
);

export const whoWeAreRoutes = router;
