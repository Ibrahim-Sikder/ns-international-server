import { Schema, model } from 'mongoose';
import { TProduct } from './products.interface';

const productSchema = new Schema<TProduct>({
  category: { type: String, required: true },
  images: { type: [String], required: true },
});

export const Product = model<TProduct>('Products', productSchema);
