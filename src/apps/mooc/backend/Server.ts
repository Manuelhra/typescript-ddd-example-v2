import express, { Express, Router } from 'express'
import * as http from 'http'
import { json, urlencoded } from 'body-parser'
import helmet from 'helmet';
import compression from 'compression';
import errorHandler from 'errorhandler';

import { registerRoutes  } from './routes';

export class Server {
    private readonly express: Express;
    private readonly port: number;
    private httpServer?: http.Server;

    constructor(port: number) {
        this.port = port;
        this.express = express();

        this.express.use(json());
        this.express.use(urlencoded());
        this.express.use(helmet.xssFilter());
        this.express.use(helmet.noSniff());
        this.express.use(helmet.hidePoweredBy());
        this.express.use(helmet.frameguard({ action: 'deny' }));
        this.express.use(compression());

        const router: Router = Router();
        router.use(errorHandler);

        // Registrar rutas
    } 
}