import { WordMother } from "../../../shared/domain/WordMother";

export class CourseDurationMother {
    static create(value: string): string {
        return value;
    }

    static random(): string {
        return this.create(WordMother.random({ maxLength: 10 }));
    }

    static invalidValueType(): number {
        return 2000;
    }
}