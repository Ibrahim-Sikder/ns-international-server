import { z } from 'zod';

const createAbout = z.object({
  body: z.object({
    description: z.string({ message: ' description is required' }),
    images: z.array(z.string(), { required_error: 'Images are required' }),
    meta_title: z.string({
      required_error: 'Meta title is required',
    }),
    meta_description: z.string({
      required_error: 'Meta description is required',
    }),
    meta_keywords: z
      .array(z.string())
      .min(1, 'At least one keyword is required'),
  }),
});

const updateAbout = z.object({
  body: z.object({
    description: z.string().optional(),
    image: z.string().optional(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    meta_keywords: z.array(z.string()).optional(),
  }),
});

export const aboutValidations = {
  createAbout,
  updateAbout,
};
