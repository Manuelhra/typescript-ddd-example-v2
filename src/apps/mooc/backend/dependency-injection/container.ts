import * as awilix from 'awilix';

import { StatusGetController } from '../controllers/StatusGetController';
import { CoursesPutController } from '../controllers/CoursesPutController';
import { CourseCreator } from '../../../../contexts/mooc/courses/application/CourseCreator';
import { FileCourseRepository } from '../../../../contexts/mooc/courses/infrastructure/persistence/FileCourseRepository';
import { CourseRepository } from '../../../../contexts/mooc/courses/domain/CourseRepository';

interface Container {
    statusGetController: StatusGetController;
    coursesPutController: CoursesPutController;
    courseCreator: CourseCreator,
    courseRepository: CourseRepository,
}

const container = awilix.createContainer<Container>({ injectionMode: awilix.InjectionMode.PROXY });

container.register({
    courseRepository: awilix.asClass(FileCourseRepository).singleton(),
    courseCreator: awilix.asClass(CourseCreator),
    coursesPutController: awilix.asClass(CoursesPutController),
    statusGetController: awilix.asClass(StatusGetController),
})

export const statusGetController = container.resolve('statusGetController');
export const coursesPutController = container.resolve('coursesPutController');