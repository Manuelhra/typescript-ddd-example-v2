import { MongoClient } from "mongodb";
import { MongoConfig } from "./MongoConfig";

export class MongoClientFactory {
    static #clients: { [key: string] : MongoClient } = {};

    static async createClient(params: {
        boundedContextName: string;
        mongoConfig: MongoConfig;
    }): Promise<MongoClient> {
        let client = MongoClientFactory.getClient(params.boundedContextName);

        if (!client) {
            client = await MongoClientFactory.createAndConnectClient(params.mongoConfig);

            MongoClientFactory.registerClient(client, params.boundedContextName);
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