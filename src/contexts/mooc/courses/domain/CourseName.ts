import { StringValueObject } from "../../../shared/domain/value-object/StringValueObject";
import { CourseNameLengthExceeded } from "./CourseNameLengthExceeded";

export class CourseName extends StringValueObject {
    readonly #chartsMax: number = 20;
    constructor(value: string) {
        super(value);
        this.ensureLengthIsLessThan30Characters(value);
    }

    private ensureLengthIsLessThan30Characters(value: string): void {
        if (value.length > this.#chartsMax) {
            throw new CourseNameLengthExceeded(`<${this.constructor.name}> has more than ${this.#chartsMax} characters`);
        }
    }
}