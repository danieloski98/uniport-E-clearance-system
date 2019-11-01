import { Schema, Document } from 'mongoose';

export const CourseModel = new Schema({
    userID: {
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
        type: Number,
        required: true,
        trim: true,
    },
    courses: {
        type: Array,
        required: true,
        maxlength: 9,
    },
});

export interface ICourses extends Document {
    userID: string;
    level: number;
    semester: number;
    courses: ICourse[];
}

export interface ICourse {
    course_code: string;
    course_title: string;
    grade: string;
    score: number;
}
