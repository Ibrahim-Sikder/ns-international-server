import express from 'express';

import { bannerControllers } from './banner.controller';
import { bannerValidations } from './banner.validation';
import { validateRequest } from '../../middlewares/validateRequest';
import { auth } from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/',
  auth('admin','super_admin'),
  validateRequest(bannerValidations.createBannerValidationSchema),
  bannerControllers.createBanner,
);
router.get('/', bannerControllers.getAllBanner);
router.get('/:id', bannerControllers.getSingleBanner);
router.delete('/:id',   auth('admin','super_admin'), bannerControllers.deleteBanner);
router.patch(
  '/:id',
  auth('admin','super_admin'),
  validateRequest(bannerValidations.updateBannerValidationSchema),
  bannerControllers.updateBanner,
);

export const bannerRoutes = router;
