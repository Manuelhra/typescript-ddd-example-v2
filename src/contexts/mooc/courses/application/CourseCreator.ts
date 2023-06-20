import { Course } from "../domain/Course";
import { CourseRepository } from "../domain/CourseRepository";

export class CourseCreator {
    #repository: CourseRepository;

    constructor(dependencies: {
        courseRepository: CourseRepository,
    }) {
        this.#repository = dependencies.courseRepository;
    }

    async run(id: string, name: string, duration: string): Promise<void> {
        const course = new Course({ id, name, duration });

        return this.#repository.save(course);
    }
}