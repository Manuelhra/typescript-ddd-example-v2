import * as awilix from 'awilix';

import { StatusGetController } from '../controllers/StatusGetController';
import { CoursesPutController } from '../controllers/CoursesPutController';
import { CourseCreator } from '../../../../contexts/mooc/courses/application/CourseCreator';

interface Container {
    statusGetController: StatusGetController;
    coursesPutController: CoursesPutController;
    courseCreator: CourseCreator,
}

const container = awilix.createContainer<Container>({ injectionMode: awilix.InjectionMode.PROXY });

container.register({
    statusGetController: awilix.asClass(StatusGetController),
    coursesPutController: awilix.asClass(CoursesPutController),
    courseCreator: awilix.asClass(CourseCreator),
})

export const statusGetController = container.resolve('statusGetController');
export const coursesPutController = container.resolve('coursesPutController');