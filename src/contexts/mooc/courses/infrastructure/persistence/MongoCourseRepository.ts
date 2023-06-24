import { ObjectId } from "mongodb";

import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";
import { CourseId } from "../../../shared/domain/courses/CourseId";
import { Nullable } from "../../../../shared/domain/Nullable";
import { MongoRepository } from "../../../../shared/infrastructure/persistence/mongo/MongoRepository";

interface CourseDocument {
    _id: string;
    name: string;
    duration: string;
}

export class MongoCourseRepository extends MongoRepository<Course> implements CourseRepository {
    public save(course: Course): Promise<void> {
        return this.persist(course.id.toString(), course);
    }

    public async search(id: CourseId): Promise<Nullable<Course>> {
        const collection = await this.collection();
        const document = await collection.findOne<CourseDocument>({ _id: new ObjectId(id.toString()) });

        return document ? Course.fromPrimitives({ id: id.toString(), name: document.name.toString(), duration: document.duration }) : null;
    }

    protected collectionName(): string {
        return 'courses';
    }
}