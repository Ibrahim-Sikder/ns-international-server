import express from 'express';
import { aboutValidations } from './about.validation';
import { aboutControllers } from './about.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin', 'super_admin'),
  validateRequest(aboutValidations.createAbout),
  aboutControllers.createAbout,
);
router.get('/', aboutControllers.getAllAbout);
router.get('/:id', aboutControllers.getSingleAbout);
router.delete(
  '/:id',
  auth('admin', 'super_admin'),
  aboutControllers.deleteAbout,
);
router.patch(
  '/:id',
  auth('admin', 'super_admin'),
  validateRequest(aboutValidations.updateAbout),
  aboutControllers.updateAbout,
);

export const aboutRoutes = router;
