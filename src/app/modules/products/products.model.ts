import { Schema, model } from 'mongoose';
import { TProduct } from './products.interface';

const productSchema = new Schema<TProduct>({
  title: { type: String, },
  category: { type: String,  },
  images: { type: [String], },
});

export const Product = model<TProduct>('Products', productSchema);
