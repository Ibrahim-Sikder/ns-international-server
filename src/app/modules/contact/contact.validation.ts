import { z } from 'zod';

const createContactValidation = z.object({
  body: z.object({
    first_name: z
      .string({
        required_error: 'First name is required.',
      })
      .trim(),

    last_name: z
      .string({
        required_error: 'Last name is required.',
      })
      .trim(),

    email: z
      .string({
        required_error: 'Email is required.',
      })
      .email('Please provide a valid email address.')
      .trim()
      .toLowerCase(),

    company_name: z
      .string({
        required_error: 'Company name is required.',
      })
      .trim(),

    subject: z
      .string({
        required_error: 'Subject is required.',
      })
      .trim(),

    phone: z
      .number({
        required_error: 'Phone number is required.',
      })
      
      .transform(Number),

    message: z
      .string({
        required_error: 'Message is required.',
      })
      .trim(),
  }),
});

export const ContactValidations = {
  createContactValidation,
};
