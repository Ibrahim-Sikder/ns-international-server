import express from 'express';
import { aboutValidations } from './about.validation';
import { aboutControllers } from './about.controller';
import { validateRequest } from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  validateRequest(aboutValidations.createAbout),
  aboutControllers.createAbout,
);
router.get('/', aboutControllers.getAllAbout);
router.get('/:id', aboutControllers.getSingleAbout);
router.delete('/:id', aboutControllers.deleteAbout);
router.patch(
  '/:id',
  validateRequest(aboutValidations.updateAbout),
  aboutControllers.updateAbout,
);

export const aboutRoutes = router;
