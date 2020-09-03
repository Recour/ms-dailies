import moment from 'moment';
import {timezoneOffsets} from "./timezones";

// Daily reset time (00:00 UTC)
export const dailyReset = {
    interval: 'daily',
    name: 'Daily Reset',
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}

// Weekly boss reset time (Thursday 00:00 UTC)
export const weeklyBossReset = {
    interval: 'weekly',
    name: 'Weekly Boss Reset',
    day: 4,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}

// Weekly quest reset time (Monday 00:00 UTC)
export const weeklyQuestReset = {
    interval: 'weekly',
    name: 'Weekly Quest Reset',
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}

// Reset types
export const resetTypes = [
    dailyReset,
    weeklyBossReset,
    weeklyQuestReset
]

// Daily reset types
export const resetTypesDailies = [
    dailyReset
]

// Weekly reset types
export const resetTypesWeeklies = [
    weeklyBossReset,
    weeklyQuestReset
]

// Next reset time for given time
export const getNextResetTime = (time, resetType, timezone) => {
    var nextReset = moment.utc(time)

    switch(resetType.interval) {
        case 'daily':
            nextReset.hour(resetType.hour)
            nextReset.minute(resetType.minute)
            nextReset.second(resetType.second)
            nextReset.millisecond(resetType.millisecond)

            nextReset.hour(nextReset.hour() - timezoneOffsets[timezone]);

            if(nextReset.isBefore(time)) {
                nextReset.day(nextReset.day() + 1)
            }

            break
        
        case 'weekly':
            nextReset.day(resetType.day)
            nextReset.hour(resetType.hour)
            nextReset.minute(resetType.minute)
            nextReset.second(resetType.second)
            nextReset.millisecond(resetType.millisecond)

            nextReset.hour(nextReset.hour() - timezoneOffsets[timezone]);

            if(nextReset.isBefore(time)) {
                nextReset.week(nextReset.week() + 1)
            }

            break

        default:
            break
    }
    
    return nextReset
}
