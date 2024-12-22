import { z } from 'zod';

const createServicesSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    sub_title: z.string({ required_error: 'Subtitle is required' }),
    description: z.string({ required_error: 'Description is required' }),
    category: z.array(z.string()).optional(),
    images: z
      .array(z.string(), { required_error: 'Images are required' })
      .nonempty('At least one image is required'),
  }),
  
});
const createServiceCategorySchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
  }),
  
});
const updateServicesSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    sub_title: z.string().optional(),
    description: z.string().optional(),
    category: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const ServicesValidatons = {
  createServicesSchema,
  updateServicesSchema,
   createServiceCategorySchema
};
