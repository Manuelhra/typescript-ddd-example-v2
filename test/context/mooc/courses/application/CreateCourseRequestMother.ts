import { CourseName } from "../../../../../src/contexts/mooc/courses/domain/CourseName";
import { CourseId } from "../../../../../src/contexts/mooc/shared/domain/courses/CourseId";
import { CourseDurationMother } from "./CourseDurationMother";
import { CourseIdMother } from "./CourseIdMother";
import { CourseNameMother } from "./CourseNameMother";

export class CreateCourseRequestMother {
    static create(id: CourseId, name: CourseName, duration: string) {
        return { id: id.toString(), name: name.toString(), duration };
    }

    static random() {
        return this.create(CourseIdMother.random(), CourseNameMother.random(), CourseDurationMother.random());
    }

    static invalidCourseNameRequest() {
        return this.create(CourseIdMother.random(), CourseNameMother.invalidRandomName(), CourseDurationMother.random());
    }

    static invalidCourseIdRequest() {
        return this.create(CourseIdMother.invalidId(), CourseNameMother.random(), CourseDurationMother.random());
    }

    static invalidCourseDurationType(): number {
        return CourseDurationMother.invalidValueType();
    }
}