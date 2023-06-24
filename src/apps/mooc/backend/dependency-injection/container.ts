import * as awilix from 'awilix';
import { MongoClient } from 'mongodb';

import { StatusGetController } from '../controllers/StatusGetController';
import { CoursesPutController } from '../controllers/CoursesPutController';
import { CourseCreator } from '../../../../contexts/mooc/courses/application/CourseCreator';
import { CourseRepository } from '../../../../contexts/mooc/courses/domain/CourseRepository';
import { MongoConfigFactory } from '../../../../contexts/mooc/shared/infrastructure/persistence/mongo/MongoConfigFactory';
import { MongoClientFactory } from '../../../../contexts/shared/infrastructure/persistence/mongo/MongoClientFactory';
import { MongoConfig } from '../../../../contexts/shared/infrastructure/persistence/mongo/MongoConfig';
import { MongoCourseRepository } from '../../../../contexts/mooc/courses/infrastructure/persistence/MongoCourseRepository';


interface Container {
    statusGetController: StatusGetController;
    coursesPutController: CoursesPutController;
    courseCreator: CourseCreator;
    courseRepository: CourseRepository;
    mongoConfig: MongoConfig;
    boundedContextName: string;
    mongoClient: Promise<MongoClient>;
}

const container = awilix.createContainer<Container>({ injectionMode: awilix.InjectionMode.PROXY });

container.register({
    courseCreator: awilix.asClass(CourseCreator),
    coursesPutController: awilix.asClass(CoursesPutController),
    statusGetController: awilix.asClass(StatusGetController),
    boundedContextName: awilix.asValue('mooc'),
    mongoConfig: awilix.asValue(MongoConfigFactory.createConfig()),
    mongoClient: awilix.asFunction(MongoClientFactory.createClient),
    courseRepository: awilix.asClass(MongoCourseRepository).singleton(),
});

export const statusGetController = container.resolve('statusGetController');
export const coursesPutController = container.resolve('coursesPutController');
export const courseRepository = container.resolve('courseRepository');