import { Module } from '@nestjs/common';
import { RecordsController } from './records.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordSchema } from '../../models/record';

@Module({
  controllers: [RecordsController],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: 'Record',
          schema: RecordSchema,
          collection: 'Record',
        },
      ],
    ),
  ]
})
export class RecordsModule {}
