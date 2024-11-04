import { model, Schema } from "mongoose";
import { TContact } from "./contact.interface";


const contactSchema = new Schema<TContact>({
  first_name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true
  },
  last_name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email address.']
  },
  company_name: {
    type: String,
    required: [true, 'Company name is required.'],
    trim: true
  },
  subject: {
    type: String,
    required: [true, 'Subject is required.'],
    trim: true
  },
  phone: {
    type: Number,
    required: [true, 'Subject is required.'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Message is required.'],
    trim: true
  }
}, {
  timestamps: true
});

export const Contact = model<TContact>('Contact', contactSchema);
