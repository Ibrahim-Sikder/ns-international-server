import express from 'express';

import { validateRequest } from '../../middlewares/validateRequest';
import { affiliationControllers } from './affiliation.controller';
import { AffiliationValidation } from './affiliation.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AffiliationValidation.createAffiliationValidationSchema),
  affiliationControllers.createAffiliation,
);
router.get('/', affiliationControllers.getAllAffiliation);
router.get('/:id', affiliationControllers.getSingleAffiliation);
router.delete('/:id', affiliationControllers.deleteAffiliation);
router.patch(
  '/:id',

  affiliationControllers.updateAffiliation,
);

export const affiliationRoutes = router;
