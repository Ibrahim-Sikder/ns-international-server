import express from 'express';

import { validateRequest } from '../../middlewares/validateRequest';
import { productControllers } from './products.controller';
import { ProductValidatons } from './products.validation';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin','super_admin'),
  validateRequest(ProductValidatons.createProductSchema),
  productControllers.createProduct,
);
router.get('/', productControllers.getAllProduct);
router.get('/:id', productControllers.getSingleProduct);
router.delete('/:id', auth('admin','super_admin'), productControllers.deleteProduct);
router.patch(
  '/:id',
  auth('admin','super_admin'),
  validateRequest(ProductValidatons.updateProductSchema),
  productControllers.updateProduct,
);

export const productRoutes = router;
