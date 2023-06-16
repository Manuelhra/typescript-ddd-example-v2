import express, { Express, NextFunction, Request, Response } from 'express'
import Router from 'express-promise-router';
import * as http from 'http'
import { json, urlencoded } from 'body-parser'
import helmet from 'helmet';
import compression from 'compression';
import errorHandler from 'errorhandler';
import httpStatus from 'http-status';

import { registerRoutes  } from './routes';

export class Server {
    private readonly express: Express;
    private readonly port: string;
    private httpServer?: http.Server;

    constructor(port: string) {
        this.port = port;
        this.express = express();

        this.express.use(json());
        this.express.use(urlencoded({ extended: true }));
        this.express.use(helmet.xssFilter());
        this.express.use(helmet.noSniff());
        this.express.use(helmet.hidePoweredBy());
        this.express.use(helmet.frameguard({ action: 'deny' }));
        this.express.use(compression());

        const router: express.Router = Router();
        router.use(errorHandler());
        this.express.use(router);

        registerRoutes(router);

		router.use((err: Error, _req: Request, res: Response, _next: NextFunction): void => {
			console.log(err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
		});
    } 

    async listen(): Promise<void> {
        return new Promise((resolve, _reject) => {
            const env = this.express.get('env') as string;
            this.httpServer = this.express.listen(this.port, () => {
                console.log(`Mock Backend App is running at http://localhost:${this.port} in ${env} mode`)
                console.log('Press CTRL-C to stop');
                resolve();
            })
        })
    }

    getHTTPServer(): Server['httpServer'] {
        return this.httpServer;
    }

    async stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.httpServer) {
                this.httpServer.close((error) => {
                    if (error) reject(error)
                    else resolve();
                })
            }

            resolve();
        })
    }
}