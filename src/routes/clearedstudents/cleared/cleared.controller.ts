import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IClearedStudent } from '../../../models/clearedstudents';
import { Response } from 'express';

@Controller('cleared')
export class ClearedController {

    constructor(@InjectModel('ClearedStudent') private readonly clearedStudent: Model<IClearedStudent>) {}

    @Post()
    async newClearedStudent(@Body() body: IClearedStudent, @Res() res: Response): Promise<void> {
        try {
            const isInDb = await this.clearedStudent.find({ matNo: body.matNo });
            if (isInDb.length >= 1) {
                res.status(400)
                .send({
                    message: 'Aleady in the system',
                });
            } else {
                const putInDb = await this.clearedStudent.insertMany([body]);
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
    async getClearedStudents(@Res() res: Response): Promise<void> {
        try {
            const allClearedStudent = await this.clearedStudent.find();
            res.status(200)
            .send({
                data: allClearedStudent,
            })
        } catch (error) {
            res.status(500)
            .send({
                message: error,
            })
        }
    }
}
