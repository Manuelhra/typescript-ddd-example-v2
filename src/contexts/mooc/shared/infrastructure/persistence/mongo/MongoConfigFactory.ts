import { MongoConfig } from "../../../../../shared/infrastructure/persistence/mongo/MongoConfig";
import moocConfig from "../../config";

const mongoConfig = {
    url: moocConfig.get('mongo.url'),
};

export class MongoConfigFactory {
    static createConfig(): MongoConfig {
        return mongoConfig;
    }
}