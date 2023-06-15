import { Router } from 'express';
import { glob } from 'glob';

const register = (routePath: string, router: Router): void => {
	const { register } = require(routePath) as { register: (router: Router) => void };
    register(router);
}

export const registerRoutes = (router: Router): void => {
    const routes: string[] = glob.sync(`${__dirname}/**/*.route.*`);
    routes.map((route) => register(route, router));
}