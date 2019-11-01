import { Module } from '@nestjs/common';
import { FormController } from './form/form.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FormSchema } from '../../models/form';

@Module({
  controllers: [FormController],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: 'Form',
          schema: FormSchema,
          collection: 'forms',
        },
      ],
    ),
  ]
})
export class FormModule {}
