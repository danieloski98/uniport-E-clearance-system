import { Module } from '@nestjs/common';
import { ClearedController } from './cleared/cleared.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClearedStudentSchema } from '../../models/clearedstudents';

@Module({
  controllers: [ClearedController],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: 'ClearedStudent',
          schema: ClearedStudentSchema,
          collection: 'ClearedStudent',
        }
      ]
    ),
  ]
})
export class ClearedstudentsModule {}
