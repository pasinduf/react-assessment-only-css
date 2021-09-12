const config: BaseConfig = {
    development: {
        apiUrl: 'http://www.omdbapi.com/?apikey=8c94bb5a',
    },
    production: {
        apiUrl: 'http://45.32.110.207:8070/api/',
    },
};

export const baseConfig = (env: string) => {
    return config[env] || config.development;
};

