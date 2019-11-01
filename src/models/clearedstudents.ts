import { Schema, Document } from 'mongoose';

export const ClearedStudentSchema = new Schema({
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

export interface IClearedStudent extends Document {
    fullname: string;
    matNo: string;
}