import convict from 'convict';

const moocConfig = convict<{ env: string, mongo: { url: string } }>({
    env: {
        doc: 'The application environment',
        format: ['production', 'development', 'staging', 'test'],
        env: 'NODE_ENV',
        default: 'default',
    },
    mongo: {
        url: {
            doc: 'The mongo connection URL',
            format: String,
            env: 'MONGO_URL',
            default: 'mongodb://localhost:27017/mooc-backend-dev',        }
    }
});

moocConfig.loadFile([__dirname + '/default.json', __dirname + '/' + moocConfig.get('env') + '.json']);

export default moocConfig;