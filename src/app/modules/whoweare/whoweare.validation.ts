import { z } from 'zod';

export const createWhoWeAreValidationSchema = z.object({
  body:z.object({
    title: z.string().optional(),
  description: z.string().optional(),
  images: z.array(z.string()).optional(),
  client: z.number().optional(),
  shipment: z.number().optional(),
  experience: z.number().optional(),
  visited_conference: z.number().optional(),
  compliance_factories: z.number().optional(),
  production: z.number().optional(),
  })
});
export const updateWhoWeAreValidationSchema = z.object({
  body:z.object({
    title: z.string().optional(),
  description: z.string().optional(),
  images: z.array(z.string()).optional(),
  client: z.number().optional(),
  shipment: z.number().optional(),
  experience: z.number().optional(),
  visited_conference: z.number().optional(),
  compliance_factories: z.number().optional(),
  production: z.number().optional(),
  })
});


export const whoWeAreValidatons = {
    createWhoWeAreValidationSchema,
    updateWhoWeAreValidationSchema
}