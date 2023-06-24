import {
    MongoClient,
    ObjectId,
    Collection,
} from "mongodb";

import { AggreateRoot } from "../../../domain/AggregateRoot";

export abstract class MongoRepository<T extends AggreateRoot<{ id: string; name: string; duration: string }>> {
    #_client: Promise<MongoClient>;

    constructor(dependencies: {
        mongoClient: Promise<MongoClient>;
    }) {
        this.#_client = dependencies.mongoClient;
    }

    protected abstract collectionName(): string;

    protected client(): Promise<MongoClient> {
        return this.#_client;
    }

    protected async persist(id: string, aggregateRoot: T): Promise<void> {
        const collection = await this.collection();
        const { id: identification, ...props } = aggregateRoot.toPromitives();
        const document = { ...props };

        console.log(id);

        await collection.updateOne({ _id: new ObjectId(40000) }, { $set: document }, { upsert: true });
    }

    protected async collection(): Promise<Collection<Document>> {
        return (await this.#_client).db().collection(this.collectionName());
    }
}