import { z } from 'zod';

const createAffiliationValidationSchema = z.object({
  body: z.object({
    images: z.array(z.string()).optional(),
  }),
});

export const AffiliationValidation = {
  createAffiliationValidationSchema,
};
