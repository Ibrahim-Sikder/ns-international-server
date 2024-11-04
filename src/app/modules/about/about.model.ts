import { Schema, model } from 'mongoose';
import { TAbout } from './about.interface';

const aboutSchema = new Schema<TAbout>({
  title: {
    type: String,
    required: [true, ' title is required'],
  },
  sub_title: {
    type: String,
    required: [true, 'Sub title is required'],
  },

  description: {
    type: String,
    required: [true, ' description is required'],
  },
  image: {
    type: String,
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
