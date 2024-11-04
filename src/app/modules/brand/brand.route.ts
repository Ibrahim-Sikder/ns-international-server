import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { BrandValidations } from './brand.validation';
import { brandControllers } from './brand.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(BrandValidations.createBrandValidation),
  brandControllers.createBrand,
);
router.get('/', brandControllers.getAllBrand);
router.get('/:id', brandControllers.getSingleBrand);
router.delete('/:id', brandControllers.deleteBrand);
router.patch(
  '/:id',
  brandControllers.updateBrand,
);

export const brandRoutes = router;
