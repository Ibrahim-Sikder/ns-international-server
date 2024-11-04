import { z } from 'zod';

const createReviewValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    designation: z.string().min(1, { message: 'Designation is required' }),
    images: z.array(z.string()).optional(),
    description: z.string().min(1, { message: 'Description is required' }),
  }),
});

const updateReviewValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    designation: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const reviewValidations = {
  createReviewValidationSchema,
  updateReviewValidationSchema,
};
