import { Schema, model } from 'mongoose';
import { TAbout } from './about.interface';

const aboutSchema = new Schema<TAbout>({
  description: {
    type: String,
    required: [true, ' description is required'],
  },
  images: {
    type: [String],
    required: [true, 'Image URL is required'],
  },
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

export const About = model<TAbout>('About', aboutSchema);
