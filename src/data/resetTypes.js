import moment from 'moment'

// Daily reset time (00:00 UTC)
export const dailyReset = {
    name: 'Daily Reset',
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}

// Weekly boss reset time (Thursday 00:00 UTC)
export const weeklyBossReset = {
    name: 'Weekly Boss Reset',
    day: 4,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}

// Reset types
export const resetTypes = [
    dailyReset,
    weeklyBossReset
]

// Next reset time for given time
export const getNextResetTime = (time, resetType) => {
    var nextReset = moment.utc(time)

    switch(resetType) {
        case dailyReset:
            nextReset.hour(resetType.hour)
            nextReset.minute(resetType.minute)
            nextReset.second(resetType.second)
            nextReset.millisecond(resetType.millisecond)

            if(nextReset.isBefore(time)) {
                nextReset.day(nextReset.day() + 1)
            }

            break
        
        case weeklyBossReset:
            nextReset.day(resetType.day)
            nextReset.hour(resetType.hour)
            nextReset.minute(resetType.minute)
            nextReset.second(resetType.second)
            nextReset.millisecond(resetType.millisecond)

            if(nextReset.isBefore(time)) {
                nextReset.week(nextReset.week() + 1)
            }

            break

        default:
            break
    }
    
    return nextReset
}