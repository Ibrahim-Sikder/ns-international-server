import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { complianceValidatons } from './compliance.validation';
import { complianceControllers } from './compliance.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin','super_admin'),
  validateRequest(complianceValidatons.createComplianceSchema),
  complianceControllers.createCompliance,
);
router.get('/', complianceControllers.getAllCompliance);
router.get('/:id', complianceControllers.getSingleCompliance);
router.delete('/:id',  auth('admin','super_admin'), complianceControllers.deleteCompliance);
router.patch('/:id',  auth('admin','super_admin'), complianceControllers.updateCompliance);

export const complianceRoutes = router;
