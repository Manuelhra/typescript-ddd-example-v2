import { Request, Response } from "express";

import { Controller } from "./Controller";

export class StatusGetController implements Controller {
    async run(_req: Request, res: Response): Promise<void> {
        res.status(200).send();
    }
}


