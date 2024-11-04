import express from 'express';

import { contactControllers } from './contact.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { ContactValidations } from './contact.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ContactValidations.createContactValidation),
  contactControllers.createContact,
);
router.get('/', contactControllers.getAllContact);
router.delete('/:id', contactControllers.deleteContact);

export const contactRoutes = router;
