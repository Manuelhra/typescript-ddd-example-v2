import {
    describe,
    test,
    beforeEach,
} from '@jest/globals'

import { CourseCreator } from "../../../../../src/contexts/mooc/courses/application/CourseCreator";
import { Course } from "../../../../../src/contexts/mooc/courses/domain/Course";
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { Uuid } from '../../../../../src/contexts/shared/domain/value-object/Uuid';

describe('CourseCreator', () => {
    let repository: CourseRepositoryMock;
    let creator: CourseCreator;

    beforeEach(() => {
        repository = new CourseRepositoryMock();
        creator = new CourseCreator({ courseRepository: repository });
    })

    test('Should create a valid course', async () => {
        const id = 'ef8ac118-8d7f-49cc-abec-78e0d05af80a';
        const name = 'name';
        const duration = '5 hours';
        const expectedCourse = new Course({ id: new Uuid(id), name, duration });

        await creator.run({ id, name, duration });
        
        repository.assertSaveHaveBeenCalledWith(expectedCourse);
    });
})