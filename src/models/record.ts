import { Schema, Document } from 'mongoose';

export const RecordSchema = new Schema({
    user: {
        type: String,
        required: true,
        trim: true,
    },
    level: {
        type: String,
        required: true,
        trim: true,
    },
    semester: {
        type: String,
        required: true,
        trim: true,
    },
    courses: {
        type: Array,
        required: true,
        trim: true,
    },
});

export interface IRecord extends Document {
    user: string;
    level: string;
    semester: string;
    courses: ICourse[];
}

export interface ICourse {
    title: string;
    code: string;
    score: number;
    grade: string;
}