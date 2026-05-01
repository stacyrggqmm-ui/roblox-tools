import { HttpService } from "@rbxts/services";

interface ApiResponse<T> {
    data: T;
    error?: string;
}

export class ApiService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async fetchData<T>(endpoint: string): Promise<ApiResponse<T>> {
        try {
            const response = await HttpService.GetAsync(`${this.baseUrl}/${endpoint}`);
            const data: T = JSON.parse(response);
            return { data };
        } catch (error) {
            let errorMessage = "Unknown error";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            return { data: null as any, error: errorMessage };
        }
    }

    public async postData<T>(endpoint: string, payload: T): Promise<ApiResponse<T>> {
        try {
            const response = await HttpService.PostAsync(`${this.baseUrl}/${endpoint}`, JSON.stringify(payload));
            const data: T = JSON.parse(response);
            return { data };
        } catch (error) {
            let errorMessage = "Unknown error";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            return { data: null as any, error: errorMessage };
        }
    }
}
