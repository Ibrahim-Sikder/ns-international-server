import { Schema, model } from 'mongoose';
import { TBrand } from './brand.interface';

const aboutSchema = new Schema<TBrand>({
  images: {
    type: [String],
    required: [true, 'Image URL is required'],
  },
});

export const Brand = model<TBrand>('Brand', aboutSchema);