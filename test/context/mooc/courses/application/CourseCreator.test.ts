import {
    describe,
    test,
    beforeEach,
    expect,
} from '@jest/globals'

import { CourseCreator } from "../../../../../src/contexts/mooc/courses/application/CourseCreator";
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { CourseNameLengthExceeded } from '../../../../../src/contexts/mooc/courses/domain/CourseNameLengthExceeded';
import { CreateCourseRequestMother } from './CreateCourseRequestMother';
import { CourseMother } from './CourseMother';

describe('CourseCreator', () => {
    let repository: CourseRepositoryMock;
    let creator: CourseCreator;

    beforeEach(() => {
        repository = new CourseRepositoryMock();
        creator = new CourseCreator({ courseRepository: repository });
    });

    test('Should create a valid course', async () => {
        const request = CreateCourseRequestMother.random();
        const expectedCourse = CourseMother.fromRequest(request);

        await creator.run(request);

        repository.assertSaveHaveBeenCalledWith(expectedCourse);
    });

    test('Should throw error if course name length is exceeded', () => {
        expect(() => {
            const request = CreateCourseRequestMother.invalidCourseNameRequest();
            const expectedCourse = CourseMother.fromRequest(request);
            creator.run(request);

            repository.assertSaveHaveBeenCalledWith(expectedCourse);
        }).toThrow(CourseNameLengthExceeded);
    })
})