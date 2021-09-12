const config: BaseConfig = {
    development: {
        apiUrl: 'http://www.omdbapi.com/?apikey=8c94bb5a',
    }
};

export const baseConfig = (env: string) => {
    return config[env] || config.development;
};

