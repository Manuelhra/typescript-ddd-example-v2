import { AggreateRoot } from "../../../shared/domain/AggregateRoot";
import { CourseId } from "../../shared/domain/courses/CourseId";
import { CourseName } from "./CourseName";

export class Course extends AggreateRoot<{ id: string; name: string; duration: string; }>  {
    readonly id: CourseId;
    readonly name: CourseName;
    readonly duration: string;

    constructor({
        id,
        name,
        duration,
    }: { id: string, name: string, duration: string }) {
        super();

        this.id = new CourseId(id);
        this.name = new CourseName(name);
        this.duration = duration;
    }

    static fromPrimitives(plainData: {
        id: string;
        name: string;
        duration: string;
    }): Course {
        return new Course({ id: plainData.id, name: plainData.name, duration: plainData.duration });
    }

    toPromitives() {
        return {
            id: this.id.toString(),
            name: this.name.toString(),
            duration: this.duration,
        }
    }
}