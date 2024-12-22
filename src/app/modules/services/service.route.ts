import express from 'express';

import { validateRequest } from '../../middlewares/validateRequest';
import { ServicesValidatons } from './service.validation';
import { serviceControllers } from './service.controller';
import { auth } from '../../middlewares/auth';
import { serviceCategoriesControllers } from './service.cateogyr.controller';

const router = express.Router();

router.post(
  '/',
  auth('admin', 'super_admin'),
  validateRequest(ServicesValidatons.createServicesSchema),
  serviceControllers.createServices,
);
router.get(
  '/categories',
  serviceCategoriesControllers.getAllServicesCategory,
);
router.get('/', serviceControllers.getAllServices);
router.get('/:id', serviceControllers.getSingleServices);
router.delete(
  '/:id',
  auth('admin', 'super_admin'),
  serviceControllers.deleteServices,
);
router.patch(
  '/:id',
  auth('admin', 'super_admin'),
  validateRequest(ServicesValidatons.updateServicesSchema),
  serviceControllers.updateServices,
);

//caterories route
router.post(
  '/categories',
  auth('admin', 'super_admin'),
  validateRequest(ServicesValidatons.createServiceCategorySchema),
  serviceCategoriesControllers.createServicesCategory,
);

router.delete(
  '/categories/:id',
  auth('admin', 'super_admin'),
  serviceCategoriesControllers.deleteServicesCategory,
);
export const servicesRoutes = router;
