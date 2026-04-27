type RobloxData = {id: number; name: string; description: string; creator: string; createdAt: string; updatedAt: string;};

const fetchRobloxData = async (id: number): Promise<RobloxData> => {
    const response = await fetch(`https://api.roblox.com/data/${id}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data: RobloxData = await response.json();
    return data;
};

const formatRobloxData = (data: RobloxData): string => {
    return `(${data.id}) ${data.name} - ${data.description} \nCreated by: ${data.creator} on ${data.createdAt}`;
};

export { fetchRobloxData, formatRobloxData };