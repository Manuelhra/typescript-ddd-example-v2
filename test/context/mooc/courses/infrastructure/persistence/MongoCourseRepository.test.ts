import {
    describe,
    test,
    beforeEach,
    afterAll,
} from '@jest/globals';

import { courseRepository, mongoClient } from '../../../../../../src/apps/mooc/backend/dependency-injection/container';
import { MongoEnvironmentArranger } from '../../../../shared/infrastructure/mongo/MongoEnvironmentArranger';
import { CourseMother } from '../../application/CourseMother';

const environmentArranger = new MongoEnvironmentArranger({ mongoClient });

beforeEach(async () => {
    await environmentArranger.arrange();
});

afterAll(async () => {
    await environmentArranger.arrange();
    await environmentArranger.close();
});

describe('CourseRepository', () => {
    test('#save: should save a course', async () => {
        const randomCourse = CourseMother.random();

        await courseRepository.save(randomCourse);
    });
});