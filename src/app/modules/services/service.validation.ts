import { z } from 'zod';

const createServicesSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    sub_title: z.string({ required_error: 'Subtitle is required' }),
    description: z.string({ required_error: 'Description is required' }),
    category: z.string({ required_error: 'Category is required' }),
    images: z
      .array(z.string(), { required_error: 'Images are required' })
      .nonempty('At least one image is required'),
  }),
});
const updateServicesSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    sub_title: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const ServicesValidatons = {
  createServicesSchema,
  updateServicesSchema,
};
