import { DateTime, Duration } from "luxon"

export type StreamData = {
    isSpecial: boolean,
    isVacation: boolean,
    time: Duration,
    date: DateTime,
}

export type Stream = {
    time: string,
    date: DateTime,
    isSpecial: boolean,
    isVacation: boolean,
    isLive: boolean,
}

export type Days = {
    wed: boolean,
    sun: boolean,
    nextWed: boolean,
    special: string,
    vacation: string,
}

export type StreamDays = 'wed' | 'sun' | 'nextWed'