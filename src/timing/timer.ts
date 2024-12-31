import { DateTime, Duration } from "luxon"
import { StreamDays, Days, StreamTimer } from "./types"


export function getCurrentTime(days: Days): StreamTimer  {
    const inNY = {zone: "America/New_York"}
    const nowInNY = DateTime.local(inNY)
    const startOfWeek = nowInNY.startOf('week')


    const DateSpecial = DateTime.fromISO(days.special, inNY)
    const TimeUntilSpecial = DateSpecial.diff(nowInNY, ['days', 'hours', 'minutes', 'seconds'])
    
    const DateVacation = DateTime.fromISO(`${days.vacation}T21:00:00.000-04:00`)
    const TimeUntilVacation = DateVacation.diff(nowInNY, ['days', 'hours', 'minutes', 'seconds'])

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
        return DateTime.fromFormat(`${upcomingDate(day).month}/${upcomingDate(day).day}/${upcomingDate(day).year}, 8:00 PM`, 'f', inNY)
    }

    const timeUntil = (day: StreamDays): Duration => {
        return upcomingStreamDate(day).diff(nowInNY, ['days', 'hours', 'minutes', 'seconds'])
    }

    if (TimeUntilSpecial.days >= 0 && TimeUntilSpecial.hours >= -1) {
        return {
            isSpecial: true,
            isVacation: false,
            time: TimeUntilSpecial, 
            date: DateSpecial,
        }
    }
    if (days.wed && timeUntil('wed').days >=0 && timeUntil('wed').hours >= -1) {
       return TimerData(timeUntil('wed'), upcomingStreamDate('wed'))
    }
    if (days.sun && timeUntil('sun').days >=0 && timeUntil('sun').hours >= -1) {
        return TimerData(timeUntil('sun'), upcomingStreamDate('sun'))
     }
    if (days.nextWed && timeUntil('nextWed').days >=0 && timeUntil('nextWed').hours >= -1) {
        return TimerData(timeUntil('nextWed'), upcomingStreamDate('nextWed'))
     }
    if (!days.wed && !days.sun && !days.nextWed) {
         return {
             isSpecial: false,
             isVacation: true,
             time: TimeUntilVacation,
             date: DateVacation,
         }
    }
    return {
        isSpecial: false, 
        isVacation: false,
        time: Duration.fromISO('P3Y') ,
        date: DateTime.fromISO('2077-12-30T12:00:00.000')
    }    

function TimerData(time: Duration, date: DateTime): StreamTimer {
    const timer = {
        isSpecial: false,
        isVacation: false,
        time: time,
        date: date
    }

    return timer
}
}