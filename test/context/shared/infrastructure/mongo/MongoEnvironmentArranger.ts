import { MongoClient } from "mongodb";
import { EnvironmentArranger } from "../arranger/EnvironmentArranger";

export class MongoEnvironmentArranger extends EnvironmentArranger {
    readonly #_client: Promise<MongoClient>;

    constructor(dependencies: {
        mongoClient: Promise<MongoClient>;
    }) {
        super();

        this.#_client = dependencies.mongoClient;
    }

    public async arrange(): Promise<void> {
        await this.cleanDataBase();
    }

    public async close(): Promise<void> {
        return (await this.client()).close();
    }

    private async cleanDataBase(): Promise<void> {
        const collections = await this.collections();
        const client = await this.client();

        for(const collection of collections) {
            await client.db().collection(collection).deleteMany();
        }
    }

    private async collections(): Promise<string[]> {
        const client = await this.client();
        const collections = await client.db().listCollections(undefined, { nameOnly: true }).toArray();

        return collections.map((collection) => collection.name);
    }

    private client(): Promise<MongoClient> {
        return this.#_client;
    }
}