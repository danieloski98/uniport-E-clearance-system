import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MyMongooseModule as MyMongoose } from './modules/mongoose/mongoose.module';
import { StudentModule } from './routes/student/student.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Favour', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
