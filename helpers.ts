export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

export function generateUniqueId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

export function debounce(fn: Function, delay: number): () => void {
    let timeoutId: NodeJS.Timeout;
    return function(...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

export function throttle(fn: Function, limit: number): () => void {
    let lastFn: NodeJS.Timeout;
    let lastRan: number;
    return function(...args: any[]) {
        const context = this;
        if (!lastRan) {
            fn.apply(context, args);
            lastRan = Date.now();
        }
        clearTimeout(lastFn);
        lastFn = setTimeout(() => {
            if ((Date.now() - lastRan) >= limit) {
                fn.apply(context, args);
                lastRan = Date.now();
            }
        }, limit - (Date.now() - lastRan));
    };
}

export function isEmptyObject(obj: object): boolean {
    return Object.keys(obj).length === 0;
}