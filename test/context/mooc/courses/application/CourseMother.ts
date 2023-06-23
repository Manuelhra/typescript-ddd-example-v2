import { Course } from "../../../../../src/contexts/mooc/courses/domain/Course";

export class CourseMother {
    static create(id: string, name: string, duration: string): Course {
        return new Course({ id, name, duration });
    }

    static fromRequest(request: { id: string, name: string, duration: string }): Course {
        return this.create(request.id, request.name, request.duration);
    }
}