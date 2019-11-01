import { Controller, Post, Body, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICourses } from '../../../models/courses';
import { Model } from 'mongoose';
import { Response } from 'express';
import { IUploadStudentModel } from '../../../models/student.model';

@Controller('courses')
export class CoursesController {
    constructor(@InjectModel('Courses') private readonly coursesModel: Model<ICourses>,
                @InjectModel('Student') private readonly students: Model<IUploadStudentModel>) {}

    @Post()
    async getAll(@Body() body: ICourses, @Res() res: Response): Promise<void> {
        try {
            const put = await this.students.find();
            console.log(put);
            res.status(201)
            .send({
                data: put,
            });
        } catch (error) {
            res.status(500)
            .send({
                message: 'Database error',
            });
        }
    }
}
