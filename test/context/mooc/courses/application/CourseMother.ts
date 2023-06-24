import { Course } from "../../../../../src/contexts/mooc/courses/domain/Course";
import { CourseDurationMother } from "./CourseDurationMother";
import { CourseIdMother } from "./CourseIdMother";
import { CourseNameMother } from "./CourseNameMother";

export class CourseMother {
    static create(id: string, name: string, duration: string): Course {
        return new Course({ id, name, duration });
    }

    static fromRequest(request: { id: string, name: string, duration: string }): Course {
        return this.create(request.id, request.name, request.duration);
    }

    static random(): Course {
        return this.create(CourseIdMother.random().toString(), CourseNameMother.random().toString(), CourseDurationMother.random());
    }
}