import { Schema, Document, model } from 'mongoose';
import { boolean } from 'joi';

export const UploadStudentSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  mat_no: {
    type: String,
    required: true,
    minlength: 13,
    maxlength: 13,
  },
  step: {
    type: Number,
    default: 0,
  },
  cleared: {
    type: Boolean,
    default: false,
  },
  done: {
    type: Boolean,
    default: false,
  }
});


export interface IUploadStudentModel extends Document {
  fullname: string;
  mat_no: string;
  step: number;
  cleared: boolean;
  done: boolean;
}
