export interface Config {  apiUrl: string;  timeout: number;  retries: number;}

export function validateConfig(config: Config): boolean {  if (!config.apiUrl || typeof config.apiUrl !== 'string') {    return false;  }
  if (config.timeout <= 0 || typeof config.timeout !== 'number') {    return false;  }
  if (config.retries < 0 || typeof config.retries !== 'number') {    return false;  }
  return true;
}

export function loadConfig(): Config {  const config: Config = {    apiUrl: 'https://api.example.com',    timeout: 5000,    retries: 3,  };
  if (!validateConfig(config)) {    throw new Error('Invalid configuration');  }
  return config;
}