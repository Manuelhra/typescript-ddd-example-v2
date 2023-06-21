import validate from 'uuid-validate';

import { InvalidArgumentError } from './InvalidArgumentError';

export class Uuid {
    readonly #value: string;

    constructor(value: string) {
        this.ensureIsValidUuid(value);

        this.#value = value;
    }

    private ensureIsValidUuid(id: string): void {
        if (validate(id) === false) {
            throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
        }
    }

    public getValue(): string {
        return this.#value;
    }
} 