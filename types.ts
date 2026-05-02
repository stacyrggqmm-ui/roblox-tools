type User = {
    id: string;
    username: string;
    displayName: string;
    isOnline: boolean;
};

type GameSettings = {
    maxPlayers: number;
    gameMode: 'Solo' | 'Duo' | 'Squad';
    map: string;
};

type InventoryItem = {
    id: string;
    name: string;
    quantity: number;
};

type PlayerInventory = {
    userId: string;
    items: InventoryItem[];
};

export type { User, GameSettings, InventoryItem, PlayerInventory };