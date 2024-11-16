import { z } from 'zod';

export const createWhoWeAreValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
    client: z.string().optional(),
    shipment: z.string().optional(),
    experience: z.string().optional(),
    visited_conference: z.string().optional(),
    compliance_factories: z.string().optional(),
    production: z.string().optional(),
  }),
});
export const updateWhoWeAreValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
    client: z.string().optional(),
    shipment: z.string().optional(),
    experience: z.string().optional(),
    visited_conference: z.string().optional(),
    compliance_factories: z.string().optional(),
    production: z.string().optional(),
  }),
});

export const whoWeAreValidatons = {
  createWhoWeAreValidationSchema,
  updateWhoWeAreValidationSchema,
};
