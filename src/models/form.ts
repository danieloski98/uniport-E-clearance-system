import { Schema, Document } from 'mongoose';

export const FormSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    matNo: {
        type: String,
        required: true,
        maxlength: 13,
        minlength: 13,
        trim: true,
    },
});

export interface IFormStudent extends Document {
    fullname: string;
    matNo: string;
}