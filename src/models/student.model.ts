import { Schema, Document } from 'mongoose';

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
    department: {
        type: String,
        required: true,
    },
    faculty: {
        type: String,
        required: true,
    },
});

export interface IUploadStudentModel extends Document {
    fullname: string;
    mat_no: string;
    department: string;
    faculty: string;
}
