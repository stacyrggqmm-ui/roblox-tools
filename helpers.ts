export async function retry<T>(fn: () => Promise<T>, retries: number, delay: number): Promise<T> {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(res => setTimeout(res, delay));
        }
    }
    throw new Error('Max retries reached');
}

export async function fetchData(url: string): Promise<any> {
    return await retry(async () => {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    }, 3, 1000);
}
