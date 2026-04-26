type User = {
    id: string;
    name: string;
    age: number;
};

class UserService {
    private users: User[] = [];

    /**
     * Adds a user to the service.
     * @param user - The user to add.
     */
    public addUser(user: User): void {
        this.users.push(user);
    }

    /**
     * Retrieves all users from the service.
     * @returns An array of users.
     */
    public getUsers(): User[] {
        return this.users;
    }

    /**
     * Finds a user by ID.
     * @param id - The ID of the user to find.
     * @returns The user if found, otherwise undefined.
     */
    public findUserById(id: string): User | undefined {
        return this.users.find(user => user.id === id);
    }
}

const userService = new UserService();
export default userService;
