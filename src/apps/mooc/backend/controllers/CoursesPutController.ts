import { Request, Response } from "express";
import httpStatus from 'http-status';

import { Controller } from "./Controller";
import { CourseCreator } from "../../../../contexts/mooc/courses/application/CourseCreator";

export class CoursesPutController implements Controller {
    readonly #courseCreator: CourseCreator;

    constructor(dependencies: {
        courseCreator: CourseCreator,
    }){
        this.#courseCreator = dependencies.courseCreator;
    }

    async run(req: Request, res: Response): Promise<void> {
        const { id, name, duration  } = req.body;
        await this.#courseCreator.run({ id, name, duration });

        res.status(httpStatus.CREATED).send();
    }
}