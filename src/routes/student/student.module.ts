import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadStudentSchema } from '../../models/student.model';
import { NextStepController } from './next-step/next-step.controller';
import { CourseModel } from '../../models/courses';
import { CoursesController } from './courses/courses.controller';
import { Database } from './courses/providers/database';

@Module({
  controllers: [StudentController, NextStepController, CoursesController],
  imports: [
    MongooseModule.forFeature(
      [
      {
        name: 'Student',
        schema: UploadStudentSchema,
        collection: 'Student',
      },
      {
        name: 'Courses',
        schema: CourseModel,
        collection: 'Courses',
      }
      ],
    ),
  ],
  providers: [Database],
})
export class StudentModule {}
