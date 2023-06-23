import { CourseName } from "../../../../../src/contexts/mooc/courses/domain/CourseName";
import { TextMother } from "../../../shared/domain/TextMother";
import { WordMother } from "../../../shared/domain/WordMother";

export class CourseNameMother {
    static create(value: string): CourseName {
        return new CourseName(value);
    }

    static random(): CourseName {
        return this.create(WordMother.random({ maxLength: 10 }));
    }

    static invalidRandomName(): CourseName {
        return this.create(TextMother.random());
    }
}