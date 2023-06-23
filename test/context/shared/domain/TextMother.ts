import { MotherCreator } from "./MotherCreator";

export class TextMother {
    static random(): string {
        return MotherCreator.random().lorem.text();
    }
}