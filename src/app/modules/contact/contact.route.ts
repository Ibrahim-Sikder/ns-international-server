import express from 'express';
import { contactValidationSchema } from './contact.validation';
import { contactControllers } from './contact.controller';
import { validateRequest } from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  validateRequest(contactValidationSchema),
  contactControllers.createContact,
);
router.get('/', contactControllers.getAllContact);
router.delete('/:id', contactControllers.deleteContact);

export const contactRoutes = router;
