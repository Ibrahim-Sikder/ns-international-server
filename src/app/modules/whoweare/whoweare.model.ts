import { Schema, model } from 'mongoose';
import { TWhoWeAre } from './whoweare.interface';

const whoWeAreSchema = new Schema<TWhoWeAre>({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  images: {
    type: [String],
  },
  client: {
    type: Number,
  },
  shipment: {
    type: Number,
  },
  experience: {
    type: Number,
  },
  visited_conference: {
    type: Number,
  },
  compliance_factories: {
    type: Number,
  },
  production: {
    type: Number,
  },
});

export const WhoWeAre = model<TWhoWeAre>('WhoWeAre', whoWeAreSchema);
