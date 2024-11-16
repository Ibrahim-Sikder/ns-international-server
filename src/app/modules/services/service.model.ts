import { model, Schema } from 'mongoose';
import { TServices } from './service.interface';

const servicesSchema = new Schema<TServices>({
  title: { type: String, required: true },
  sub_title: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: true },
  category: { type: [String], required: true },
  meta_title: {
    type: String,
  },
  meta_description: {
    type: String,
  },
  meta_keywords: {
    type: [String]
  },
});

export const Services = model<TServices>('Services', servicesSchema);
