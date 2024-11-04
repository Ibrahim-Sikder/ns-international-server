import { z } from 'zod';

const createComplianceSchema = z.object({
  body: z.object({
    images: z.array(z.string()).optional(),
    description: z.string().optional(),
    social_compliance_img: z.array(z.string()).optional(),
    social_compliance_title: z.string().optional(),
    social_compliance_description: z.string().optional(),
    EmployeesCocCovers: z.array(z.string()).optional(),
    zeroTolerance_img: z.array(z.string()).optional(),
    zeroTolerance_Title: z.string().optional(),
    zeroTolerance_description: z.string().optional(),
    cod_of_conduct_img: z.array(z.string()).optional(),
    cod_of_conduct_title: z.string().optional(),
    cod_of_conduct_short_description: z.string().optional(),
    cod_of_conduct_description: z.string().optional(),
    csr_description: z.string().optional(),
    csr_short_description: z.string().optional(),
    csr_title: z.string().optional(),
    csr_img: z.array(z.string()).optional(),
  }),
});

const updateComplianceSchema = z.object({
  body: z.object({
    images: z.array(z.string()).optional(),
    description: z.string().optional(),
    social_compliance_img: z.array(z.string()).optional(),
    social_compliance_title: z.string().optional(),
    social_compliance_description: z.string().optional(),
    EmployeesCocCovers: z.array(z.string()).optional(),
    zeroTolerance_img: z.array(z.string()).optional(),
    zeroTolerance_Title: z.string().optional(),
    zeroTolerance_description: z.string().optional(),
    cod_of_conduct_img: z.array(z.string()).optional(),
    cod_of_conduct_title: z.string().optional(),
    cod_of_conduct_short_description: z.string().optional(),
    cod_of_conduct_description: z.string().optional(),
    csr_description: z.string().optional(),
    csr_short_description: z.string().optional(),
    csr_title: z.string().optional(),
    csr_img: z.array(z.string()).optional(),
  }),
});

export const complianceValidatons = {
  createComplianceSchema,
  updateComplianceSchema,
};
