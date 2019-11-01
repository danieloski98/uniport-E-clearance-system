import { Module } from '@nestjs/common';
import { CourseradviserController } from './courseradviser.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursAdvisor } from '../../models/courseAvisor.model';

@Module({
  controllers: [CourseradviserController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Adviser',
        schema: CoursAdvisor,
      },
    ]),
  ],
})
export class CourseradviserModule {}
