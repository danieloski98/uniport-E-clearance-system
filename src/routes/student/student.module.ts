import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadStudentSchema } from '../../models/student.model';

@Module({
  controllers: [StudentController],
  imports: [
    MongooseModule.forFeature([{name: 'Student', schema: UploadStudentSchema}]),
  ],
})
export class StudentModule {}
