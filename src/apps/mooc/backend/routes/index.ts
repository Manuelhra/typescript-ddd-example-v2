import { Router } from 'express';
import { glob } from 'glob';

const register = (routePath: string, router: Router): void => {
	const { register } = require(`${__dirname}/${routePath}`) as { register: (router: Router) => void };
    register(router);
}

export const registerRoutes =  (router: Router) => {
    const routes: string[] = glob.globSync(`**/*.route.*`, { cwd: __dirname });
    console.log(routes);
    routes.map((route) => register(route, router));
}