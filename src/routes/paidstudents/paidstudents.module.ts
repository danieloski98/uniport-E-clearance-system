import { Module } from '@nestjs/common';
import { PaidController } from './paid/paid.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaidStudentSchema } from '../../models/paidstudent';

@Module({
  controllers: [PaidController],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: 'Paid',
          schema: PaidStudentSchema,
          collection: 'Paid',
        },
      ]
    ),
  ]
})
export class PaidstudentsModule {}
