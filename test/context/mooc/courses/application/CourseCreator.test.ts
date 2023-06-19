import {
    describe,
    expect,
    test,
} from '@jest/globals'

import { CourseCreator } from "../../../../../src/contexts/mooc/courses/application/CourseCreator";
import { Course } from "../../../../../src/contexts/mooc/courses/domain/Course";
import { CourseRepository } from "../../../../../src/contexts/mooc/courses/domain/CourseRepository";

describe('CourseCreator', () => {
    test('Should create a valid course', async () => {
        const repository: CourseRepository = {
            save: jest.fn(),
        };

        const creator = new CourseCreator(repository);
        const id = 'some-id';
        const name = 'some-name';
        const duration = 'some-duration';
        const expectedCourse = new Course({ id, name, duration });

        await creator.run(id, name, duration);
        
        expect(repository.save).toHaveBeenCalledWith(expectedCourse);
    });
})