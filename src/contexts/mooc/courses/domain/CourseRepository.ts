export interface CourseRepository {
    save(course: Course): Promise<void>;
}