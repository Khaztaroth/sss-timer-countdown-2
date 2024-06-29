// const channelName = 'secretsleepoversociety';
const channelName = 'linustech';

export function useLive(): boolean{
    var isLive: boolean
    
    async function streamUptime(channel: string): boolean {
        const res = await fetch(`https://decapi.me/twitch/uptime/${channel}`)
            if (!res.ok) {
                throw new Error('Failed to fetch uptime data')
            } else {
                var resp = await res.text()
                if (resp.includes('offline')) {
                    return true
                } else {
                    return false
                };
            };
    }

    return streamUptime(channelName)
}

export function useTitle(): string | undefined {
    const title = 'TITLE'
    return title
}

export function useGameName(): string {
    const gameName = ''

    return gameName
}