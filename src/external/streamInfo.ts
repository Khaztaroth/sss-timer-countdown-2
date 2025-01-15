const channelName = 'secretsleepoversociety';

export async function useActiveDays(): Promise<string> {
    const activeDays = async () => await fetch(`http://127.0.0.1:8787/check`, {credentials: "omit", mode: 'no-cors'})
    .then((res) => res.text())

    return await activeDays()
}

export async function useLive(): Promise<boolean> {
    const streamUptime = async (channel: string) => await fetch(`https://decapi.me/twitch/uptime/${channel}`)
        .then((res) => res.text())

    const isOnline = async () => {
        const uptime = await streamUptime(channelName)
        if (uptime.includes('offline')) {
            return false
        } else return true
    } 

    return await isOnline()
}

export async function useTitle(): Promise<string> {
    const title = async (channel: string) => await fetch(`https://decapi.me/twitch/status/${channel}`)
    .then((res) => res.text())

    return await title(channelName)
}

export async function useGameName(): Promise<string> {
    const gameName = async (channel: string) => await fetch(`https://decapi.me/twitch/game/${channel}`)
    .then((res) => res.text())

    return await gameName(channelName)
}