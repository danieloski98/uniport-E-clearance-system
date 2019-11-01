import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPaidStudent } from '../../../models/paidstudent';
import { Response } from 'express';

@Controller('paid')
export class PaidController {
    constructor(@InjectModel('Paid') private readonly paidStudent: Model<IPaidStudent>) {}

    @Post()
    async newpaidStudent(@Body() body: IPaidStudent, @Res() res: Response): Promise<void> {
        try {
            const isInDb = await this.paidStudent.find({ matNo: body.matNo });
            if (isInDb.length >= 1) {
                res.status(400)
                .send({
                    message: 'Aleady in the system',
                });
            } else {
                const putInDb = await this.paidStudent.insertMany([body]);
                res.status(201)
                .send({
                    message: 'Registered successfully',
                    data: putInDb,
                });
            }
        } catch (error) {
            res.status(500)
            .send({
                message: error,
            });
        }
    }

    @Get()
    async getpaidStudents(@Res() res: Response): Promise<void> {
        try {
            const allpaidStudent = await this.paidStudent.find();
            res.status(200)
            .send({
                data: allpaidStudent,
            })
        } catch (error) {
            res.status(500)
            .send({
                message: error,
            })
        }
    }
}
