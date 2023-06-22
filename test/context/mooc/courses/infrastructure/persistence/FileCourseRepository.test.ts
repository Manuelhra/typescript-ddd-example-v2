import { describe, test, expect } from '@jest/globals';

import { Course } from '../../../../../../src/contexts/mooc/courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/contexts/mooc/courses/infrastructure/persistence/FileCourseRepository';

describe('FileCourseRepository', () => {
    test('Should save a course', async () => {
        const id = 'ef8ac118-8d7f-49cc-abec-78e0d05af80a';
        const name = 'The best course-Gn3GxGjPtg23RlE2aLPpcUrdKDss8STA';
        const duration = '5 hours';
        const expectedCourse = new Course({ id, name, duration });
        const repository = new FileCourseRepository();

        await repository.save(expectedCourse);

        const course = await repository.search(id);
        
        expect(course).toEqual(expectedCourse);
    })
});