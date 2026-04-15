export interface PlayerData {
    id: string;
    name: string;
    score: number;
}

export interface GameService {
    getPlayerData(playerId: string): PlayerData | null;
    updatePlayerScore(playerId: string, score: number): void;
}

class RobloxGameService implements GameService {
    private playerDatabase: Record<string, PlayerData> = {};

    public getPlayerData(playerId: string): PlayerData | null {
        return this.playerDatabase[playerId] || null;
    }

    public updatePlayerScore(playerId: string, score: number): void {
        const player = this.getPlayerData(playerId);
        if (player) {
            player.score += score;
        }
    }

    public addPlayer(player: PlayerData): void {
        this.playerDatabase[player.id] = player;
    }
}

const gameService = new RobloxGameService();
const player: PlayerData = { id: '1', name: 'PlayerOne', score: 0 };

gameService.addPlayer(player);
// Example usage: updating score
console.log(gameService.getPlayerData('1'));  // { id: '1', name: 'PlayerOne', score: 0 }
gameService.updatePlayerScore('1', 10);
console.log(gameService.getPlayerData('1'));  // { id: '1', name: 'PlayerOne', score: 10 }