import { describe, test, expect } from '@jest/globals';

import { FileCourseRepository } from '../../../../../../src/contexts/mooc/courses/infrastructure/persistence/FileCourseRepository';
import { CreateCourseRequestMother } from '../../application/CreateCourseRequestMother';
import { CourseMother } from '../../application/CourseMother';

describe('FileCourseRepository', () => {
    test('Should save a course', async () => {
        const request = CreateCourseRequestMother.random();
        const expectedCourse = CourseMother.fromRequest(request);
        const repository = new FileCourseRepository();

        await repository.save(expectedCourse);

        const course = await repository.search(expectedCourse.id.toString());
        
        expect(course).toEqual(expectedCourse);
    })
});