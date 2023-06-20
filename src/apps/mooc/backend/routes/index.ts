import { NextFunction, Request, Response, Router } from 'express';
import { glob } from 'glob';
import { validationResult } from 'express-validator';
import httpStatus from 'http-status';

const register = (routePath: string, router: Router): void => {
	const { register } = require(`${__dirname}/${routePath}`) as { register: (router: Router) => void };
    register(router);
}

export const registerRoutes =  (router: Router) => {
    const routes: string[] = glob.globSync(`**/*.route.*`, { cwd: __dirname });
    console.log(routes);
    routes.map((route) => register(route, router));
}

export const validateReqSchema = (req: Request, res: Response, next: NextFunction) => {
    const validationError = validationResult(req);

    if (validationError.isEmpty()) {
        return next();
    }

    const errors = validationError.array().map((err: any) => ({ [err.path]: err.msg }));
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
        errors,
    });
}