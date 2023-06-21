import { describe, test, expect } from '@jest/globals';

import { Course } from '../../../../../../src/contexts/mooc/courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/contexts/mooc/courses/infrastructure/persistence/FileCourseRepository';
import { Uuid } from '../../../../../../src/contexts/shared/domain/value-object/Uuid';

describe('FileCourseRepository', () => {
    test('Should save a course', async () => {
        const id: string = 'ef8ac118-8d7f-49cc-abec-78e0d05af80a';
        const expectedCourse: Course = new Course({ id: new Uuid(id) , name: 'name', duration: '5 hours' });
        const repository = new FileCourseRepository();

        await repository.save(expectedCourse);

        const course = await repository.search(id);
        expect(course).toEqual(expectedCourse);
    })
});