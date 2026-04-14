export function debounce<F extends (...args: any[]) => void>(func: F, delay: number): (...args: Parameters<F>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null;

    return (...args: Parameters<F>): void => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

export function throttle<F extends (...args: any[]) => void>(func: F, limit: number): (...args: Parameters<F>) => void {
    let lastFunc: ReturnType<typeof setTimeout> | null;
    let lastRan: number;

    return function (...args: Parameters<F>): void {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            if (Date.now() - lastRan >= limit) {
                func.apply(context, args);
                lastRan = Date.now();
            }
        }
    };
}

export function formatDate(date: Date, format: string): string {
    const options: Intl.DateTimeFormatOptions = {};
    if (format.includes('year')) options.year = 'numeric';
    if (format.includes('month')) options.month = '2-digit';
    if (format.includes('day')) options.day = '2-digit';
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}