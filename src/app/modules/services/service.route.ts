import express from 'express';

import { validateRequest } from '../../middlewares/validateRequest';
import { ServicesValidatons } from './service.validation';
import { serviceControllers } from './service.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(ServicesValidatons.createServicesSchema),
  serviceControllers.createServices,
);
router.get('/', serviceControllers.getAllServices);
router.get('/:id', serviceControllers.getSingleServices);
router.delete('/:id', serviceControllers.deleteServices);
router.patch(
  '/:id',
  validateRequest(ServicesValidatons.updateServicesSchema),
  serviceControllers.updateServices,
);

export const servicesRoutes = router;
