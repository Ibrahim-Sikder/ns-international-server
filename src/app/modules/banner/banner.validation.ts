import { z } from 'zod';

export const createBannerValidationSchema = z.object({
  body: z.object({
    images: z.array(z.string()).optional(),
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const updateBannerValidationSchema = z.object({
  body: z.object({
    images: z.array(z.string()).optional(),
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const bannerValidations = {
  createBannerValidationSchema,
  updateBannerValidationSchema,
};
