import { Request, Response, Router } from 'express';

import { StatusGetController } from '../controllers/StatusGetController';

export const register = (router: Router) => {
    console.log('REGISTRANDO ROUTES ****');
    const controller: StatusGetController = new StatusGetController();
    router.get('/status', (req: Request, res: Response) => controller.run(req, res));
}