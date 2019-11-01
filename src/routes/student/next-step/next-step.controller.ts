import { Controller, Post, Body, Res, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUploadStudentModel } from '../../../models/student.model';
import { Response } from 'express';

@Controller('next-step')
export class NextStepController {
  constructor(
    @InjectModel('Student')
    private readonly uploadStudent: Model<IUploadStudentModel>,
  ) {}

  @Post()
  async nextStep(
    @Body() body: IUploadStudentModel,
    @Res() res: Response,
  ): Promise<void> {
    try {
      // check if the student exist in the database
      const checkUser = await this.uploadStudent.find({ mat_no: body.mat_no });
      if (checkUser.length === 1) {
        // clone the step field of the student and increment it
        // @stepReverter; a development function so the step wont pass
        // the expected steps
        let stepClone = this.stepReverter(checkUser[0].step) as number;
        if (stepClone >= 5) {
          res.status(400).send({
            message: 'You are already at the final step',
          });
        } else {
          stepClone++;
          checkUser[0].step = stepClone;
          res.status(200).send({
            resposne: checkUser,
          });
        }
      }
    } catch (error) {
      res.status(500).send({
        error: new HttpException(
          {
            message: 'Internal server error',
            error,
          },
          500,
        ),
      });
    }
  }

  stepReverter(step): number {
    if (step > 0) {
      step = 1;
      return step;
    } else {
      return step;
    }
  }
}
