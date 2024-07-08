import { Duration } from "luxon";

export function useFormatter(timeDiff: Duration) {
    timeDiff = timeDiff.normalize()
    if (timeDiff.days > 0) {
        return (
            timeDiff.toFormat(
                `d '${timeDiff.days < 2 ? 'day' : 'days'}' ${timeDiff.hours > 0 ? `h '${timeDiff.hours < 2 ? 'hour' : 'hours'}'` : ''} ${timeDiff.minutes > 0 ? `m '${timeDiff.minutes < 2 ? 'minute' : 'minutes'}'` : ''}`
            )
        )
    } else if (timeDiff.hours > 0) {
        return (
            timeDiff.toFormat(
                `h '${timeDiff.hours < 2 ? 'hour' : 'hours'}' ${timeDiff.minutes > 0 ? `m '${timeDiff.minutes < 2 ? 'minute' : 'minutes'}'` : ''}`
            )
        )
    } else if (timeDiff.minutes > 0) {
        return (
            timeDiff.toFormat(
                `m '${timeDiff.minutes < 2 ? 'minute' : 'minutes'}'`
            )
        )
    } else if (timeDiff.seconds >= 0) {
        return (
           timeDiff.toFormat(
            `s ${timeDiff.seconds < 2 ? "'s'econ'd'" : "'s'econ'ds'"}`
           )
        )
    } else if (timeDiff.seconds < 0 && timeDiff.seconds > -3600 ) {
        return (
            "Stream in progress!"
        ) 
    } else {
        return (
            "Stream ended, come back next time!"
        )
    }
}