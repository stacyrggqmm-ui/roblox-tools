import { HttpService } from 'services/http'; 
import { User } from 'types'; 

export class UserService { 
    private httpService: HttpService; 

    constructor(httpService: HttpService) { 
        this.httpService = httpService; 
    } 

    async getUserById(userId: string): Promise<User> { 
        const response = await this.httpService.get(`/users/${userId}`); 
        return response.data as User; 
    } 

    async createUser(user: User): Promise<User> { 
        const response = await this.httpService.post('/users', user); 
        return response.data as User; 
    } 

    async updateUser(userId: string, user: Partial<User>): Promise<User> { 
        const response = await this.httpService.put(`/users/${userId}`, user); 
        return response.data as User; 
    } 

    async deleteUser(userId: string): Promise<void> { 
        await this.httpService.delete(`/users/${userId}`); 
    } 
}