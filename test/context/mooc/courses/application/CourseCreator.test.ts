import {
    describe,
    test,
    beforeEach,
} from '@jest/globals'

import { CourseCreator } from "../../../../../src/contexts/mooc/courses/application/CourseCreator";
import { Course } from "../../../../../src/contexts/mooc/courses/domain/Course";
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

describe('CourseCreator', () => {
    let repository: CourseRepositoryMock;
    let creator: CourseCreator;

    beforeEach(() => {
        repository = new CourseRepositoryMock();
        creator = new CourseCreator({ courseRepository: repository });
    })

    test('Should create a valid course', async () => {
        const id = 'id';
        const name = 'name';
        const duration = '5 hours';
        const expectedCourse = new Course({ id, name, duration });

        await creator.run({ id, name, duration });
        
        repository.assertSaveHaveBeenCalledWith(expectedCourse);
    });
})