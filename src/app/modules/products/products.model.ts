import { Schema, model } from 'mongoose';
import { TProduct } from './products.interface';

const productSchema = new Schema<TProduct>({
  title: { type: String, },
  images: { type: [String], },
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

export const Product = model<TProduct>('Products', productSchema);
