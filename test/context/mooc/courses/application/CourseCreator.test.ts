import {
    describe,
    test,
    beforeEach,
    expect,
} from '@jest/globals'

import { CourseCreator } from "../../../../../src/contexts/mooc/courses/application/CourseCreator";
import { Course } from "../../../../../src/contexts/mooc/courses/domain/Course";
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { CourseNameLengthExceeded } from '../../../../../src/contexts/mooc/courses/domain/CourseNameLengthExceeded';

describe('CourseCreator', () => {
    let repository: CourseRepositoryMock;
    let creator: CourseCreator;

    beforeEach(() => {
        repository = new CourseRepositoryMock();
        creator = new CourseCreator({ courseRepository: repository });
    })

    test('Should create a valid course', async () => {
        const id = 'ef8ac118-8d7f-49cc-abec-78e0d05af80a';
        const name = 'The best course-Gn3GxGjPtg23RlE2aLPpcUrdKDss8STA';
        const duration = '5 hours';
        const expectedCourse = new Course({ id, name, duration });

        await creator.run({ id, name, duration });
        
        repository.assertSaveHaveBeenCalledWith(expectedCourse);
    });

    test('Should throw error if course name length is exceeded', () => {
        const id = 'ef8ac118-8d7f-49cc-abec-78e0d05af80a';
        const name = 'Some-name';
        const duration = '5 hours';

        expect(() => {
            const expectedCourse = new Course({ id, name, duration });

            creator.run({ id, name, duration });

            repository.assertSaveHaveBeenCalledWith(expectedCourse);
        }).toThrow(CourseNameLengthExceeded);
    })
})