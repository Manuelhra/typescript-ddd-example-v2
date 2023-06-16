import { Request, Response, Router } from 'express';

import { statusGetController } from '../dependency-injection/container';

export const register = (router: Router) => {
    router.get('/status', (req: Request, res: Response) => statusGetController.run(req, res));
}