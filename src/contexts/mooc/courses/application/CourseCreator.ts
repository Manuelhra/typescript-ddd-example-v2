import { Course } from "../domain/Course";
import { CourseRepository } from "../domain/CourseRepository";
import { CoursesCreatorRequest } from "./CoursesCreatorRequest";

export class CourseCreator {
    #repository: CourseRepository;

    constructor(dependencies: {
        courseRepository: CourseRepository,
    }) {
        this.#repository = dependencies.courseRepository;
    }

    async run(request: CoursesCreatorRequest): Promise<void> {
        const course = new Course({ id: request.id, name: request.name, duration: request.duration });

        return this.#repository.save(course);
    }
}