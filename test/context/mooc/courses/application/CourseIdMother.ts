import { CourseId } from "../../../../../src/contexts/mooc/shared/domain/courses/CourseId";
import { UuidMother } from "../../../shared/domain/UuidMother";

export class CourseIdMother {
  static create(value: string): CourseId {
    return new CourseId(value);
  }
  static random(): CourseId {
    return this.create(UuidMother.random());
  }

  static invalidId(): CourseId {
    return this.create('INVALID_ID');
  }
}