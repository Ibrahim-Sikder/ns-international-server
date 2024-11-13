import { Schema, model } from 'mongoose';
import { TBanner } from './banner.interface';

const bannerSchema = new Schema<TBanner>(
  {
    images: {
      type: [String],
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const Banner = model<TBanner>('Banner', bannerSchema);
