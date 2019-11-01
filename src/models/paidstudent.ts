import { Schema, Document } from 'mongoose';

export const PaidStudentSchema = new Schema({
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

export interface IPaidStudent extends Document {
    fullname: string;
    matNo: string;
}