import { MongoClient } from "mongodb";
import { MongoConfig } from "./MongoConfig";

export class MongoClientFactory {
    static #clients: { [key: string] : MongoClient } = {};

    static async createClient(boundedContextName: string, config: MongoConfig): Promise<MongoClient> {
        let client = MongoClientFactory.getClient(boundedContextName);

        if (client === null) {
            client = await MongoClientFactory.createAndConnectClient(config);

            MongoClientFactory.registerClient(client, boundedContextName);
        }

        return client;
    }

    private static getClient(boundedContextName: string): MongoClient | null {
        return MongoClientFactory.#clients[boundedContextName];
    }

    private static async createAndConnectClient(config: MongoConfig): Promise<MongoClient> {
        const client = new MongoClient(config.url, { ignoreUndefined: true });
    
        await client.connect();
    
        return client;
    }

    private static registerClient(client: MongoClient, boundedContextName: string): void {
        MongoClientFactory.#clients[boundedContextName] = client;
    }
}