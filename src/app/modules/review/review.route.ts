import express from 'express';

import { validateRequest } from '../../middlewares/validateRequest';
import { reviewController } from './review.controller';
import { reviewValidations } from './review.validation';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin','super_admin'),
  validateRequest(reviewValidations.createReviewValidationSchema),
  reviewController.createReview,
);
router.get('/', reviewController.getAllReview);
router.get('/:id', reviewController.getSingleReview);
router.delete('/:id', auth('admin','super_admin'), reviewController.deleteReview);
router.patch(
  '/:id',
  auth('admin','super_admin'),
  validateRequest(reviewValidations.updateReviewValidationSchema),
  reviewController.updateReview,
);

export const reviewRoutes = router;
