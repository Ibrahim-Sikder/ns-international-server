import express from 'express';

import { validateRequest } from '../../middlewares/validateRequest';
import { productControllers } from './products.controller';
import { ProductValidatons } from './products.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ProductValidatons.createProductSchema),
  productControllers.createProduct,
);
router.get('/', productControllers.getAllProduct);
router.get('/:id', productControllers.getSingleProduct);
router.delete('/:id', productControllers.deleteProduct);
router.patch(
  '/:id',
  validateRequest(ProductValidatons.updateProductSchema),
  productControllers.updateProduct,
);

export const productRoutes = router;
