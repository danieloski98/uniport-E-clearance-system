import { Controller, Post, Body, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICourseAdviser } from 'src/models/courseAvisor.model';
import { Model } from 'mongoose';
import { Response } from 'express';
import * as random from 'random-words';

export interface IPasswordCreateBody {
  password: string;
  email: string;
}

@Controller('courseadviser')
export class CourseradviserController {
  constructor(
    @InjectModel('Adviser')
    private readonly CourseAdviser: Model<ICourseAdviser>,
  ) {}

  @Post()
  async createAdviser(
    @Body() body: ICourseAdviser,
    @Res() res: Response,
  ): Promise<void> {
    try {
      // check if an advisor with that email exist
      const amdin = await this.CourseAdviser.find({ email: body.email });
      if (amdin.length >= 1) {
        res.status(400).send({
          message: 'Email already in use',
        });
      } else {
        // getCurrentDate
        const date: Date = new Date();
        const currentYear = date.getFullYear();
        // get the set of the course adviser
        const set = +body.Set;
        if (set !== currentYear - 4) {
          res.status(400).send({
            message: 'Can\'t register, your set is not ready to graduate',
          });
        } else {
          const generatedPassword = random(1);
          body.password = generatedPassword + Math.round(Math.random());
          const newAdmin = await this.CourseAdviser.insertMany([body]);
          res.status(201).send({
            message: 'Course adviser created',
            data: newAdmin,
          });
        }
      }
    } catch (error) {
      res.status(500).send({
        message: 'Internal server error',
        error,
      });
    }
  }

  // generate default password for the course adviser

  @Post()
  async createPassword(
    @Res() res: Response,
    @Body() body: IPasswordCreateBody,
  // tslint:disable-next-line: no-empty
  ): Promise<void> {}

  // login the course adviser

  @Post('login')
  // tslint:disable-next-line: no-empty
  async login(@Res() res: Response, @Body() body: IPasswordCreateBody ): Promise<void> {

    try {
      const checkCredentials = await this.CourseAdviser.find({ email: body.email});
      if (checkCredentials.length === 1) {
        console.log(checkCredentials);
        if ( checkCredentials[0].password === body.password) {
         res.status(201)
         .send({
           message: 'Login successful',
         });
       } else {
         res.status(400)
         .send({
           message: 'Password is incorrect',
         });
       }
      } else {
        res.status(400)
        .send({
          message: 'Incorrect email',
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500)
      .send({
        message: 'Internal serv error',
        error,
      });
    }
  }

  @Post('create')
  async new(@Res() res: Response, @Body() body): Promise<void> {
    try {
      const dbCheck = await this.CourseAdviser.find();
      if ( dbCheck.length > 1) {
        res.status(400).send({
          message: 'A course adviser is already signed up for this section',
        });
      } else {
        const newAdmin = await this.CourseAdviser.insertMany([body]);
        res.status(201)
        .send({
          message: 'Admin created',
          data: newAdmin,
        });
      }
    } catch (error) {
      res.status(500)
      .send({
        message: 'Internal server error',
        error,
      });
    }
  }
}
