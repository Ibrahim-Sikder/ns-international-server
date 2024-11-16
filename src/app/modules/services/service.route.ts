import express from 'express';

import { validateRequest } from '../../middlewares/validateRequest';
import { ServicesValidatons } from './service.validation';
import { serviceControllers } from './service.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin','super_admin'),
  validateRequest(ServicesValidatons.createServicesSchema),
  serviceControllers.createServices,
);
router.get('/', serviceControllers.getAllServices);
router.get('/:id', serviceControllers.getSingleServices);
router.delete('/:id',  auth('admin','super_admin'), serviceControllers.deleteServices);
router.patch(
  '/:id',
  auth('admin','super_admin'),
  validateRequest(ServicesValidatons.updateServicesSchema),
  serviceControllers.updateServices,
);

export const servicesRoutes = router;
