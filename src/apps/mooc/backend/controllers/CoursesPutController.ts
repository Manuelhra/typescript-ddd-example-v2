import { Request, Response } from "express";

import { Controller } from "./Controller";

export class CoursesPutController implements Controller {
    async run(_req: Request, res: Response): Promise<void> {
        res.status(201).send();
    }
}