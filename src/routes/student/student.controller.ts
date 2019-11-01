import {
  Controller,
  Post,
  Body,
  Res,
  BadRequestException,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUploadStudentModel } from '../../models/student.model';
import { Model } from 'mongoose';
import * as joi from 'joi';
import { Response } from 'express';

interface Para {
  mat_no: string;
}

@Controller('student')
export class StudentController {
  constructor(
    @InjectModel('Student')
    private readonly uploadStudent: Model<IUploadStudentModel>,
  ) {}

  /**
   *
   * @param body
   * @param res
   * A route to add a student to the database
   */

  @Post()
  async studentUpload(
    @Body() body: IUploadStudentModel,
    @Res() res: Response,
  ): Promise<void> {
    try {
      if (body.mat_no === undefined || body.fullname === undefined) {
        res
        .status(400)
        .send({
          message: 'Mat_no or full name is required',
        });
      } else {
         // validator for the body sent
      const joiValidator = joi.object().keys({
        fullname: joi
          .string()
          .required()
          .trim(),
        mat_no: joi
          .string()
          .required()
          .trim(),
      });

      // mutate the mat_no of the the student
      // tslint:disable-next-line: variable-name
      const mat_no_clone = body.mat_no.toLowerCase();
      const nameClone = body.fullname.toLowerCase();
      const newBody = {
        mat_no: mat_no_clone,
        fullname: nameClone,
      };
      joiValidator
     .validate(newBody)
     .then( async (data: IUploadStudentModel) => {
       // tslint:disable-next-line: variable-name
       const mat_no_check = await this.uploadStudent.find({ mat_no: newBody.mat_no });
       if (mat_no_check.length >= 1) {
         res
         .status(400)
         .send({
           message: 'Matriculation number already recorded',
         });
       } else  {
         // checking if the name has been used
        const nameCheck = await this.uploadStudent.find({ fullname: newBody.fullname });
        if ( nameCheck.length >= 1) {
          res.status(400)
          .send({
            message: `${data.fullname} has been recorded`,
          });
        } else {
           const putInDatabase = await this.uploadStudent.insertMany([data]);
           res.status(201)
         .send({
           message: ` ${ newBody.fullname } has been Recorded Successfully`,
         });
        }
       }
     })
     .catch();
      }
    } catch (error) {
      res.status(500)
      .send({
        message: 'internal server error',
        error,
      });
    }
  }

  // a route to get a particular sudent
  @Get(':mat_no')
  async getall(@Res() res: Response, @Param() param: Para): Promise<void> {
    const clone = param.mat_no.replace('_', '/');
    const searchResult = await this.uploadStudent.find({ mat_no: clone });
    if (searchResult.length > 0) {
      res.status(200).send({
        message: `${param.mat_no} is on the list`,
        data: searchResult,
      });
    } else if (searchResult.length === 0) {
      res.status(404).send({
        message: `${param.mat_no} not on the list`,
      });
    }
  }

  @Get()
  async getAllStudents(@Res() res: Response): Promise<void> {
    try {
      const getAllStudents = await this.uploadStudent.find();
      res.status(200)
      .send({
        data: getAllStudents,
      });
    } catch (error) {
      res.status(500)
      .send({
        message: 'Internal server error',
      });
    }
  }

  @Delete(':mat_no')
   async deleteFromList(@Param() params: Para, @Res() res: Response): Promise<void> {
    try {
      // change the _ to /
      const pa = params.mat_no as string;
      const clone = pa.replace('_', '/');
      const deletedStudent = await this.uploadStudent.deleteOne({ mat_no: clone });
      console.log(deletedStudent);
      if (deletedStudent.n >= 1) {
        res.status(200)
        .send({
          message: `${clone} removed from graduation list`,
        });
      } else if ( deletedStudent.n <= 0) {
        res.status(400)
        .send({
          message: ` ${clone} not found`,
        });
      }
    } catch(error) {
      console.log(error);
      res.status(500)
      .send({
        message: 'Internal server error',
      });
    }
  }

}
