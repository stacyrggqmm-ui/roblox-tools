export interface Config {
    apiUrl: string;
    timeout: number;
}

export class ConfigurationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ConfigurationError';
    }
}

export function loadConfig(): Config {
    const loadedConfig = JSON.parse(process.env.CONFIG || '{}');
    const { apiUrl, timeout } = loadedConfig;

    if (!apiUrl || typeof apiUrl !== 'string') {
        throw new ConfigurationError('Invalid or missing apiUrl');
    }

    if (!timeout || typeof timeout !== 'number' || timeout <= 0) {
        throw new ConfigurationError('Invalid timeout value');
    }

    return { apiUrl, timeout };
}

export function validateConfig(config: Config): void {
    if (!config.apiUrl || typeof config.apiUrl !== 'string') {
        throw new ConfigurationError('Invalid apiUrl');
    }

    if (!config.timeout || typeof config.timeout !== 'number' || config.timeout <= 0) {
        throw new ConfigurationError('Timeout must be a positive number');
    }
}