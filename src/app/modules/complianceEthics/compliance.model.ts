import { Schema, model } from 'mongoose';
import { TCompliance } from './compliance.interface';

const complianceSchema = new Schema<TCompliance>({
  images: {
    type: [String],
  },
  description: {
    type: String,
  },
  socialCompilianceImages: {
    type: [String],
  },
  social_compliance_title: {
    type: String,
  },
  social_compliance_description: {
    type: String,
  },
  EmployeesCocCovers: {
    type: [String],
  },
  zeroToleranceImages: {
    type: [String],
  },
  zeroTolerance_Title: {
    type: String,
  },
  zeroTolerance_description: {
    type: String,
  },
  codeOfConductImages: {
    type: [String],
  },
  cod_of_conduct_title: {
    type: String,
  },
  cod_of_conduct_short_description: {
    type: String,
  },
  cod_of_conduct_description: {
    type: String,
  },
  csr_description: {
    type: String,
  },
  csr_short_description: {
    type: String,
  },
  csr_title: {
    type: String,
  },
  csrImages: {
    type: [String],
  },
});

export const Compliance = model<TCompliance>('Compliance', complianceSchema);
