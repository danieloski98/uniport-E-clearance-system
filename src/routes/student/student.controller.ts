import { Controller, Post, Body, Res, BadRequestException, Get, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUploadStudentModel } from '../../models/student.model';
import { Model } from 'mongoose';
import * as joi from 'joi';
import { Response } from 'express';

interface Para{
    mat_no: string;
}


@Controller('student')
export class StudentController {

    constructor(@InjectModel('Student') private readonly uploadStudent: Model<IUploadStudentModel>) {}

    @Post()
    async studentUpload(@Body() body: IUploadStudentModel, @Res() res: Response): Promise<void> {
        try {
            const transformMat_no = body['mat_no'].toLowerCase();
            const clone = {
                fullname: body.fullname,
                mat_no: transformMat_no,
                department: body.department,
                faculty: body.faculty,
            }
            const joiValidator = joi.object().keys({
                fullname: joi.string().required().trim(),
                mat_no: joi.string().required().trim(),
                department: joi.string().required().trim(),
                faculty: joi.string().required().trim(),
            });
            joiValidator.validate(body)
            .then( async (data) => {
                const isInDataBase = await this.uploadStudent.find({ mat_no: clone.mat_no});
                if (isInDataBase.length > 0) {
                    res.status(401)
                    .send({
                        message: `mat_no ${body.mat_no} already on the list`,
                    });
                } else if ( isInDataBase.length === 0) {
                    const putInDataBase = await this.uploadStudent.insertMany([clone]);
                    res.status(201).send({
                    message: 'Operation successfull',
                    user: putInDataBase,
                });
                }
            })
            .catch(error => {
                error['status'] = 400;
                const badRequest = new BadRequestException('Required fields missing');
                res.status(400).send({
                    message: badRequest,
                    error,
                    hah: 'hahahahahahahahaah',
                });
            });
        } catch (error) {
            res.status(400).send({
                message: error,
            });
        }
    }

    @Get(':mat_no')
    async getall(@Res() res: Response, @Param() param: Para): Promise<void> {
        const clone = param.mat_no.replace('_', '/');
        const searchResult =  await this.uploadStudent.find({ mat_no: clone});
        if (searchResult.length > 0) {
            res.status(200)
            .send({
                message: `${param.mat_no} is on the list`,
                data: searchResult,
            });
        } else if (searchResult.length === 0) {
            res.status(404)
            .send({
                message: `${param.mat_no} not on the list`,
            });
        }
    }

    @Post('list/search')
    async searchList(@Body() body, @Res() res: Response): Promise<void> {
        res.send({
            mat: body,
        });
    }
}
