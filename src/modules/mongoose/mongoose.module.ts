import { Module } from '@nestjs/common';
import { MongooseModule as Mo } from '@nestjs/mongoose';
import { UploadStudentSchema } from '../../models/student.model';

@Module({
    imports: [
    ],
    exports: [
    ],
})
export class MyMongooseModule extends Mo {}
