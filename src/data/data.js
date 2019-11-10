import moment from 'moment'

// Daily reset time is 00:00 UTC
const getDailyResetTime = () => {
    var dailyResetTime = new moment.utc()
    dailyResetTime.hour(24)
    dailyResetTime.minute(0)
    dailyResetTime.second(0)
    dailyResetTime.millisecond(0)
    return dailyResetTime
}

const dailyResetTime = getDailyResetTime()

const data = {
    dailies: {
        bosses: [
            {
                name: "Balrog",
                image: require("../static/images/balrog.png"),
                difficulty: "Easy"
            },
            {
                name: "Zakum",
                image: require("../static/images/zakum.png"),
                difficulty: "Easy / Normal"
            },
            {
                name: "Ursus",
                image: require("../static/images/ursus.png"),
                difficulty: "Normal"
            },
            {
                name: "Magnus",
                image: require("../static/images/magnus.png"),
                difficulty: "Easy / Normal"
            },
            {
                name: "Hilla",
                image: require("../static/images/hilla.png"),
                difficulty: "Normal"
            },
            {
                name: "OMNI-CLN",
                image: require("../static/images/omni-cln.png"),
                difficulty: "Normal"
            },
            {
                name: "Papulatus",
                image: require("../static/images/papulatus.png"),
                difficulty: "Easy / Normal"
            },    
            {
                name: "Pierre",
                image: require("../static/images/pierre.png"),
                difficulty: "Normal"
            },    
            {
                name: "Von Bon",
                image: require("../static/images/von_bon.png"),
                difficulty: "Normal"
            },
            {
                name: "Crimson Queen",
                image: require("../static/images/crimson_queen.png"),
                difficulty: "Normal"
            },
            {
                name: "Vellum",
                image: require("../static/images/vellum.png"),
                difficulty: "Normal"
            },
            {
                name: "Von Leon",
                image: require("../static/images/von_leon.png"),
                difficulty: "Easy / Normal / Hard"
            },
            {
                name: "Horntail",
                image: require("../static/images/horntail.png"),
                difficulty: "Easy / Normal / Chaos"
            },
            {
                name: "Arkarium",
                image: require("../static/images/arkarium.png"),
                difficulty: "Easy / Normal"
            },
            {
                name: "Pink Bean",
                image: require("../static/images/pink_bean.png"),
                difficulty: "Normal"
            },
            {
                name: "Gollux",
                image: require("../static/images/gollux.png"),
                difficulty: "Easy / Normal / Hard / Hell"
            },
            {
                name: "Ranmaru",
                image: require("../static/images/ranmaru.png"),
                difficulty: "Normal / Hard"
            }
        ],
        resetTime: dailyResetTime
    }
}

export default data;