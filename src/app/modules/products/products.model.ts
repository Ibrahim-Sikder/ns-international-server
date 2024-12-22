import mongoose, { Schema, model } from 'mongoose';
import { TProduct, TProductCategory } from './products.interface';

// Define the ServicesCategory schema
const productCategorySchema = new Schema<TProductCategory>({
  name: { type: String, required: true },
});

// Register the ServicesCategory model
export const productCategory = model<TProductCategory>(
  'ProductCategory',
  productCategorySchema,
);

const productSchema = new Schema<TProduct>({
  title: { type: String },
  images: { type: [String] },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory' },
  meta_title: {
    type: String,
  },
  meta_description: {
    type: String,
  },
  meta_keywords: {
    type: [String],
  },
});

export const Product = model<TProduct>('Products', productSchema);
