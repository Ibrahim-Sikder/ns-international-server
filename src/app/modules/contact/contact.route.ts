import express from 'express';
import { contactValidationSchema } from './contact.validation';
import { contactControllers } from './contact.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  validateRequest(contactValidationSchema),
  contactControllers.createContact,
);
router.get('/', contactControllers.getAllContact);
router.delete('/:id',  auth('admin','super_admin'), contactControllers.deleteContact);

export const contactRoutes = router;
