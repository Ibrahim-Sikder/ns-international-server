import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { BrandValidations } from './brand.validation';
import { brandControllers } from './brand.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin', 'super_admin'),
  validateRequest(BrandValidations.createBrandValidation),
  brandControllers.createBrand,
);
router.get('/', brandControllers.getAllBrand);
router.get('/:id', brandControllers.getSingleBrand);
router.delete(
  '/:id',
  auth('admin', 'super_admin'),
  brandControllers.deleteBrand,
);
router.patch(
  '/:id',
  auth('admin', 'super_admin'),
  brandControllers.updateBrand,
);

export const brandRoutes = router;
