import { Request, Response, Router } from "express";
import { body, ValidationChain } from 'express-validator';

import { coursesPutController } from '../dependency-injection/container';
import { validateReqSchema } from ".";

export const register = (router: Router) => {
    const reqSchema: ValidationChain[] = [
        body(['id', 'name', 'duration']).isString(),
    ];

    router.put('/courses/:id', reqSchema, validateReqSchema, (req: Request, res: Response) => coursesPutController.run(req, res));
}