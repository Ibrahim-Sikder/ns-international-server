import { z } from 'zod';

export const contactValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required.'),
    email: z
      .string()
      .min(1, 'Email is required.')
      .email('Please provide a valid email address.'),
    company_name: z.string().min(1, 'Company name is required.'),
    subject: z.string().min(1, 'Subject is required.'),
    message: z.string().min(1, 'Message is required.'),
  }),
});
