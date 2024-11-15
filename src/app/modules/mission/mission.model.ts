import { Schema, model } from 'mongoose';
import { TMission } from './mission.interface';

const missionSchema = new Schema<TMission>({
  description: {
    type: String,
    required: [true, ' description is required'],
  },
  title: {
    type: String,
    required: [true, ' title is required'],
  },
});

export const Mission = model<TMission>('Mission', missionSchema);
