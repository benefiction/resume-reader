import config from '../app_config.json';

export type ConfigKeyType = keyof typeof config;

export const getConfigValue = (configKey: ConfigKeyType) => {
    return config[configKey];
};
