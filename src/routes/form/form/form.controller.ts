import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'express';
import { IFormStudent } from 'src/models/form';


@Controller('form')
export class FormController {
    constructor(@InjectModel('Form') private readonly form: Model<IFormStudent>) {}

    @Post()
    async newform(@Body() body: IFormStudent, @Res() res: Response): Promise<void> {
        try {
            const isInDb = await this.form.find({ matNo: body.matNo });
            if (isInDb.length >= 1) {
                res.status(400)
                .send({
                    message: 'Aleady in the system',
                });
            } else {
                const putInDb = await this.form.insertMany([body]);
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
    async getforms(@Res() res: Response): Promise<void> {
        try {
            const allform = await this.form.find();
            res.status(200)
            .send({
                data: allform,
            })
        } catch (error) {
            res.status(500)
            .send({
                message: error,
            })
        }
    }
}
