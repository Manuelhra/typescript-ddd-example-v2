import { MotherCreator } from './MotherCreator';

export class WordMother {
    static random({ minLength = 1, maxLength }: { minLength?: number; maxLength: number }): string {
        return MotherCreator.random().lorem.word({ length: { max: maxLength, min: minLength } })
    }
}