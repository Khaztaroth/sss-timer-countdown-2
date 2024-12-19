import { getCurrentTime }  from '../src/timing/timer'
import { useFormatter } from '../src/timing/formatter'

export function timerInfo() {
    async function parseDays() {
        const days: string | Response = await fetch(`https://sss-timer-dashboard.khaz.workers.dev/check`, {credentials: "omit"}).then(result => result)
        const daysJson = JSON.parse(days)
    
        return daysJson
    }

    const timeInfo = parseDays()
    const timed = getCurrentTime(timeInfo)
    const formatted = useFormatter(timed.time)

    return  formatted
}
