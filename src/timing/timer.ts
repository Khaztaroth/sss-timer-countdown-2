import { DateTime, Duration } from "luxon"
import { StreamInfo } from "../timer-viewer"
type StreamDays = 'wed' | 'sun' | 'nextWed'

type Days = {
    wed: boolean,
    sun: boolean,
    nextWed: boolean,
}

export function getCurrentTime(days: Days): StreamInfo  {
    const inNY = {zone: "America/New_York"}
    const nowInNY = DateTime.local(inNY)
    const startOfWeek = nowInNY.startOf('week')

    const week = {wed: 3, sun: 7}
    const upcomingDay: Record<StreamDays, number> = {
        wed: (week.wed - startOfWeek.weekday + 7 ) %7,
        sun: (week.sun - startOfWeek.weekday + 7 ) %7,
        nextWed: (week.wed - startOfWeek.weekday + 7 ) %14,
    }
    const upcomingDate = (day: StreamDays) : DateTime => {
        return startOfWeek.plus({days: upcomingDay[day]})
    }

    const upcomingStreamDate = (day: StreamDays): DateTime => {
        return DateTime.fromFormat(`${upcomingDate(day).month}/${upcomingDate(day).day}/${upcomingDate(day).year}, 9:00 PM`, 'f', inNY)
    }

    const timeUntil = (day: StreamDays): Duration => {
        return upcomingStreamDate(day).diff(nowInNY, ['days', 'hours', 'minutes', 'seconds'])
    }

    if (days.wed && timeUntil('wed').days >=0 && timeUntil('wed').hours >= -1) {
       return timeUntilWed(timeUntil('wed'), upcomingStreamDate('wed'))
    }
    if (days.sun && timeUntil('sun').days >=0 && timeUntil('sun').hours >= -1) {
        return timeUntilSun(timeUntil('sun'), upcomingStreamDate('sun'))
     }
     if (days.nextWed && timeUntil('nextWed').days >=0 && timeUntil('nextWed').hours >= -1) {
        return timeUntilNextWed(timeUntil('nextWed'), upcomingStreamDate('nextWed'))
     }

     return {
        day: '', 
        time: Duration.fromISO('P3Y') ,
        date: DateTime.fromISO('2077-12-30T12:00:00.000')
     }
}

function timeUntilWed(time: Duration, date: DateTime): StreamInfo {
    const timer = {
        day: 'Wednesday stream',
        time: time,
        date: date
    }

    return timer
}

function timeUntilSun(time: Duration, date: DateTime) {
    const timer = {
        day: 'Sunday stream',
        time: time,
        date: date
    }

    return timer
}

function timeUntilNextWed(time: Duration, date: DateTime) {
    const timer = {
        day: 'Wednesday stream',
        time: time,
        date: date
    }

    return timer
}