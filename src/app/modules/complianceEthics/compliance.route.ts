import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { complianceValidatons } from './compliance.validation';
import { complianceControllers } from './compliance.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(complianceValidatons.createComplianceSchema),
  complianceControllers.createCompliance,
);
router.get('/', complianceControllers.getAllCompliance);
router.get('/:id', complianceControllers.getSingleCompliance);
router.delete('/:id', complianceControllers.deleteCompliance);
router.patch('/:id', complianceControllers.updateCompliance);

export const complianceRoutes = router;
