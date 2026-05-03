export async function withRetry<T>(operation: () => Promise<T>, attempts: number = 3, delay: number = 1000): Promise<T> {
    for (let i = 0; i < attempts; i++) {
        try {
            return await operation();
        } catch (error) {
            if (i < attempts - 1) {
                await new Promise(resolve => setTimeout(resolve, delay));
            } else {
                throw error;
            }
        }
    }
}

export async function fetchWithRetry(url: string, options?: RequestInit, attempts: number = 3, delay: number = 1000): Promise<Response> {
    return await withRetry(() => fetch(url, options), attempts, delay);
}
