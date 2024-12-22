import mongoose, { model, Schema } from 'mongoose';
import { TCategory, TServices } from './service.interface';

// Define the ServicesCategory schema
const servicesCategorySchema = new Schema<TCategory>({
  name: { type: String, required: true },
});

// Register the ServicesCategory model
export const ServicesCategory = model<TCategory>('ServicesCategory', servicesCategorySchema);

// Define the Services schema
const servicesSchema = new Schema<TServices>(
  {
    title: { type: String, required: true },
    sub_title: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'ServicesCategory' },  
    meta_title: {
      type: String,
    },
    meta_description: {
      type: String,
    },
    meta_keywords: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

// Register the Services model
export const Services = model<TServices>('Services', servicesSchema);
