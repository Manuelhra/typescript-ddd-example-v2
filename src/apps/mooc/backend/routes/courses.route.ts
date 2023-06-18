import { Request, Response, Router } from "express";

import { coursesPutController } from '../dependency-injection/container';

export const register = (router: Router) => {
    router.put('/courses/:id', (req: Request, res: Response) => coursesPutController.run(req, res));
}