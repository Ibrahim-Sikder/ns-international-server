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
    required: [true, 'Meta title is required'],
  },
  meta_description: {
    type: String,
    required: [true, 'Meta title is required'],
  },
  meta_keywords: {
    type: [String],
    required: [true, 'Meta title is required'],
  },
});

export const About = model<TAbout>('About', aboutSchema);
