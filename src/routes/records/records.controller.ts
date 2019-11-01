import { Controller, Post, Body, Res, Get, Param } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IRecord } from 'src/models/record';
import { Response } from 'express';

@Controller('records')
export class RecordsController {
    constructor(
        @InjectModel('Record') private readonly record: Model<IRecord>,
    ) {}

    @Post()
    async newRecord(@Body() body: IRecord, @Res() res: Response): Promise<void> {
        try {
            const find = await this.record.find({ user: body.user, level: body.level, semester: body.semester});
            console.log(find);
            if (find.length >= 1) {
                res.status(400)
                .send({
                    message: 'Already recorded',
                });
            } else {
                const putInDatabase = await this.record.insertMany([body]);
                res.status(201)
                .send({
                    message: 'Recorded successfully',
                    data: body,
                });
            }
        } catch (error) {
            res.status(500)
            .send({
                message: error,
            });
        }
    }

    @Get(':mat_no')
    async getRecord(@Param() param, @Res() res: Response): Promise<void> {
        try {
            const mat_no = param['mat_no'] as string;
            const clone = mat_no.replace('_', '/');
            const record = await this.record.find({ user: clone});
            res.status(200)
            .send({
                data: record,
            });
        } catch (error) {
            res.status(500)
            .send({
                error,
            });
        }
    }
}
