import express from 'express';

import { validateRequest } from '../../middlewares/validateRequest';
import { productControllers } from './products.controller';
import { ProductValidatons } from './products.validation';
import { auth } from '../../middlewares/auth';
import { productCategoriesControllers } from './product.category.controller';

const router = express.Router();

router.post(
  '/',
  auth('admin', 'super_admin'),
  validateRequest(ProductValidatons.createProductSchema),
  productControllers.createProduct,
);
router.get('/categories', productCategoriesControllers.getAllProductCategory);
router.get('/', productControllers.getAllProduct);
router.get('/:id', productControllers.getSingleProduct);
router.delete(
  '/:id',
  auth('admin', 'super_admin'),
  productControllers.deleteProduct,
);
router.patch(
  '/:id',
  auth('admin', 'super_admin'),
  validateRequest(ProductValidatons.updateProductSchema),
  productControllers.updateProduct,
);

router.post(
  '/categories',
  auth('admin', 'super_admin'),
  validateRequest(ProductValidatons.createProductCategorySchema),
  productCategoriesControllers.createProductCategory,
);

router.delete(
  '/categories/:id',
  auth('admin', 'super_admin'),
  productCategoriesControllers.deleteProductCategory,
);

export const productRoutes = router;
