import { z } from 'zod';

const createBrandValidation = z.object({
  body: z.object({
    images: z.array(z.string(), { required_error: 'Images are required' }),
  }),
});

export const BrandValidations = {
  createBrandValidation,
};
