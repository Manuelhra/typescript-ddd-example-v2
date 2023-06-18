import * as awilix from 'awilix';

import { StatusGetController } from '../controllers/StatusGetController';
import { CoursePutController } from '../controllers/CoursePutController';

interface Container {
    statusGetController: StatusGetController;
    coursePutController: CoursePutController;
}

const container = awilix.createContainer<Container>({ injectionMode: awilix.InjectionMode.PROXY });

container.register({
    statusGetController: awilix.asClass(StatusGetController),
    coursePutController: awilix.asClass(CoursePutController),
})

export const statusGetController = container.resolve('statusGetController');
export const coursePutController = container.resolve('coursePutController');