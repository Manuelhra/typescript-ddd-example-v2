import { jest, expect } from "@jest/globals";

import { Course } from "../../../../../src/contexts/mooc/courses/domain/Course";
import { CourseRepository } from "../../../../../src/contexts/mooc/courses/domain/CourseRepository";

export class CourseRepositoryMock implements CourseRepository {
    #mockSave = jest.fn();

    async save(course: Course): Promise<void> {
        await this.#mockSave(course);
    }

    assertSaveHaveBeenCalledWith(expectedCourse: Course): void {
        expect(this.#mockSave).toHaveBeenCalledWith(expectedCourse);
    }
}