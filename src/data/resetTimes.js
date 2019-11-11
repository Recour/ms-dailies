import moment from 'moment'

// Daily reset time  (00:00 UTC)
export const dailyReset = {
    day: undefined,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}

// Weekly boss reset time
export const weeklyBossReset = {
    day: 4,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}

// Next reset time for given time
export const getNextResetTime = (time, reset) => {
    var nextReset = time

    switch(reset) {
        case dailyReset:
            nextReset.day(time.day + 1)
            nextReset.hour(reset.hour)
            nextReset.minute(reset.minute)
            nextReset.second(reset.second)
            nextReset.millisecond(reset.millisecond)
            break
        
        case weeklyBossReset:
            // Next week if weekday has passed
            if(time.day >= reset.day) {
                nextReset.week(time.week + 1)
            } 

            nextReset.day(reset.day)
            nextReset.hour(reset.hour)
            nextReset.minute(reset.minute)
            nextReset.second(reset.second)
            nextReset.millisecond(reset.millisecond)
            break

        default:
            break
    }
    
    return nextReset
}