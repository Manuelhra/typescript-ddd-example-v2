import * as awilix from 'awilix';

import { StatusGetController } from '../controllers/StatusGetController';
import { CoursesPutController } from '../controllers/CoursesPutController';

interface Container {
    statusGetController: StatusGetController;
    coursesPutController: CoursesPutController;
}

const container = awilix.createContainer<Container>({ injectionMode: awilix.InjectionMode.PROXY });

container.register({
    statusGetController: awilix.asClass(StatusGetController),
    coursesPutController: awilix.asClass(CoursesPutController),
})

export const statusGetController = container.resolve('statusGetController');
export const coursesPutController = container.resolve('coursesPutController');