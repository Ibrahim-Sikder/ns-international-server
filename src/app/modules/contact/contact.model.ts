import { model, Schema } from "mongoose";
import { TContact } from "./contact.interface";


const contactSchema = new Schema<TContact>({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email address.']
  },
  company_name: {
    type: String,
    trim: true
  },
  phone: {
    type: Number,
    trim: true
  },
  subject: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

export const Contact = model<TContact>('Contact', contactSchema);
