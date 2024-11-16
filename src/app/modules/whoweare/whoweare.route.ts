import express from 'express';

import { validateRequest } from '../../middlewares/validateRequest';
import { WhoWeAreController } from './whoweare.controller';
import { whoWeAreValidatons } from './whoweare.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(whoWeAreValidatons.createWhoWeAreValidationSchema),
  WhoWeAreController.createWhoWeAre,
);
router.get('/', WhoWeAreController.getAllWhoWeAre);
router.get('/:id', WhoWeAreController.getSingleWhoWeAre);
router.delete('/:id', WhoWeAreController.deleteWhoWeAre);
router.patch(
  '/:id',
  validateRequest(whoWeAreValidatons.updateWhoWeAreValidationSchema),
  WhoWeAreController.updateWhoWeAre,
);

export const whoWeAreRoutes = router;
