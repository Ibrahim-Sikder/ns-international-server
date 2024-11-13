import express from 'express';

import { bannerControllers } from './banner.controller';
import { bannerValidations } from './banner.validation';
import { validateRequest } from '../../middlewares/validateRequest';
const router = express.Router();

router.post(
  '/',
  validateRequest(bannerValidations.createBannerValidationSchema),
  bannerControllers.createBanner,
);
router.get('/', bannerControllers.getAllBanner);
router.get('/:id', bannerControllers.getSingleBanner);
router.delete('/:id', bannerControllers.deleteBanner);
router.patch(
  '/:id',
  validateRequest(bannerValidations.updateBannerValidationSchema),
  bannerControllers.updateBanner,
);

export const bannerRoutes = router;
