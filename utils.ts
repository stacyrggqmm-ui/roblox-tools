export function safeGet<T>(obj: Record<string, any>, key: string): T | undefined {
    try {
        if (obj && key in obj) {
            return obj[key];
        }
    } catch (error) {
        console.error('Error in safeGet:', error);
    }
    return undefined;
}

export function parseNumber(value: any): number | null {
    try {
        const parsed = Number(value);
        return isNaN(parsed) ? null : parsed;
    } catch (error) {
        console.error('Error in parseNumber:', error);
        return null;
    }
}

export function validatePositiveNumber(value: any): boolean {
    try {
        const num = parseNumber(value);
        return num !== null && num > 0;
    } catch (error) {
        console.error('Error in validatePositiveNumber:', error);
        return false;
    }
}

export function logError(message: string, error?: Error): void {
    const timestamp = new Date().toISOString();
    const errorMessage = error ? `: ${error.message}` : '';
    console.error(`[${timestamp}] ${message}${errorMessage}`);
}