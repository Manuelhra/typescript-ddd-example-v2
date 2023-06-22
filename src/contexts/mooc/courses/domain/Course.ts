import { CourseId } from "../../shared/domain/courses/CourseId";
import { CourseName } from "./CourseName";

export class Course {
    readonly id: CourseId;
    readonly name: CourseName;
    readonly duration: string;

    constructor({
        id,
        name,
        duration,
    }: { id: string, name: string, duration: string }) {
        this.id = new CourseId(id);
        this.name = new CourseName(name);
        this.duration = duration;
    }
}