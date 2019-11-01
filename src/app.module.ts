import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MyMongooseModule as MyMongoose } from './modules/mongoose/mongoose.module';
import { StudentModule } from './routes/student/student.module';
import { CourseradviserModule } from './routes/courseradviser/courseradviser.module';
import { ClearedstudentsModule } from './routes/clearedstudents/clearedstudents.module';
import { PaidstudentsModule } from './routes/paidstudents/paidstudents.module';
import { FormModule } from './routes/form/form.module';
import { RecordsModule } from './routes/records/records.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Favour', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    StudentModule,
    CourseradviserModule,
    ClearedstudentsModule,
    PaidstudentsModule,
    FormModule,
    RecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
