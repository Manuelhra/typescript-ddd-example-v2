import { describe, test, expect } from '@jest/globals';

import { Course } from '../../../../../../src/contexts/mooc/courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/contexts/mooc/courses/infrastructure/persistence/FileCourseRepository';

describe('FileCourseRepository', () => {
    test('Should save a course', async () => {
        const id: string = 'some-id';
        const expectedCourse: Course = new Course({ id, name: 'some-name', duration: '5 hours' });
        const repository = new FileCourseRepository();

        await repository.save(expectedCourse);

        const course = await repository.search(id);
        expect(course).toEqual(expectedCourse);
    })
});