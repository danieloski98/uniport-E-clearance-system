import { Schema, Document } from 'mongoose';

export const CoursAdvisor: Schema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    required: false,
    default: null,
  },
  Set: {
    type: String,
    required: true,
    trim: true,
  },
});

export interface ICourseAdviser extends Document {
  email: string;
  password: string;
  Set: string;
}
