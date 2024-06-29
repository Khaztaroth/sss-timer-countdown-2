// const channelName = 'secretsleepoversociety';
const channelName = 'uberhaxornova';

export function useLive(): boolean {

    let isLive = false

    async function streamUptime(channel: string): Promise<boolean> {
        const res = await fetch(`https://decapi.me/twitch/uptime/${channel}`)
            if (!res.ok) {
                throw new Error('Failed to fetch uptime data')
            } else {
                const resp = await res.text()
                return !resp.includes('offline')
            };
    };

    async function liveStatus(channel: string) {
        isLive = await streamUptime(channel);
    }

    console.log(isLive)
    liveStatus(channelName);
    console.log(isLive)
    return isLive;
}

export function useTitle(): string | undefined {
    let title: string = '';

    async function streamTitle() {
        const res = await fetch(`https://decapi.me/twitch/status/${channelName}`)
        if (!res.ok) {
            throw new Error('Could not get title information')
        } else {
            var resp = await res.text()
            title = resp
        };
    };

    streamTitle();
    return title
}

export function useGameName(): string {
    const gameName = ''

    return gameName
}