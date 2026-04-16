import { HttpService } from '@rbxts/services';

export interface RobloxDataResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export function fetchRobloxData<T>(url: string): Promise<RobloxDataResponse<T>> {
    return new Promise((resolve) => {
        HttpService.GetAsync(url)
            .then((response) => {
                const data = JSON.parse(response);
                resolve({ success: true, data });
            })
            .catch((error) => {
                resolve({ success: false, error: error.message });
            });
    });
}

export function postRobloxData<T>(url: string, body: T): Promise<RobloxDataResponse<void>> {
    return new Promise((resolve) => {
        HttpService.PostAsync(url, JSON.stringify(body), Enum.HttpContentType.ApplicationJson)
            .then(() => {
                resolve({ success: true });
            })
            .catch((error) => {
                resolve({ success: false, error: error.message });
            });
    });
}