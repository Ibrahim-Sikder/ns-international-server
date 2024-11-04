import { z } from 'zod';

const createProductSchema = z.object({
  body: z.object({
    category: z.string({ required_error: 'Category is required' }),
    images: z.array(z.string(), { required_error: 'Images are required' }),
  }),
});
const updateProductSchema = z.object({
  body: z.object({
    category: z.string({ required_error: 'Category is required' }),
    images: z.array(z.string(), { required_error: 'Images are required' }),
  }),
});

export const ProductValidatons = {
  createProductSchema,
  updateProductSchema,
};
