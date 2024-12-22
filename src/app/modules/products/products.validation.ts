import { z } from 'zod';

const createProductSchema = z.object({
  body: z.object({
    category: z.array(z.string()),
    images: z.array(z.string(), { required_error: 'Images are required' }),
  }),
});
const updateProductSchema = z.object({
  body: z.object({
    images: z.array(z.string()).optional(),
    category: z.array(z.string()).optional(),
  }),
});
const createProductCategorySchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
  }),
});
export const ProductValidatons = {
  createProductSchema,
  updateProductSchema,
  createProductCategorySchema,
};
