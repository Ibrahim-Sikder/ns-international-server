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
    type: String,
  },
  shipment: {
    type: String,
  },
  experience: {
    type: String,
  },
  visited_conference: {
    type: String,
  },
  compliance_factories: {
    type: String,
  },
  production: {
    type: String,
  },
});

export const WhoWeAre = model<TWhoWeAre>('WhoWeAre', whoWeAreSchema);
