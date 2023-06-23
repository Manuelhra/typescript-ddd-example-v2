import convict from 'convict';

const moocConfig = convict<{ env: null, mongo: { url: null } }>({
    env: {
        doc: 'The application environment',
        format: ['production', 'development', 'staging', 'test'],
        env: 'NODE_ENV',
        default: null,
    },
    mongo: {
        url: {
            doc: 'The mongo connection URL',
            format: String,
            env: 'MONGO_URL',
            default: null,
        }
    }
});

moocConfig.loadFile([__dirname + '/default.json', __dirname + '/' + moocConfig.get('env') + '.json']);

export default moocConfig;