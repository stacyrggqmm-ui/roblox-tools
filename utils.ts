export async function retry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === retries - 1) throw error;
      await new Promise(res => setTimeout(res, delay));
    }
  }
  throw new Error('Failed after maximum retries');
}

export async function fetchWithRetry(url: string, options?: RequestInit): Promise<Response> {
  return retry(() => fetch(url, options), 3, 1000);
}