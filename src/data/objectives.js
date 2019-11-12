import { 
    dailyReset,
    weeklyBossReset
} from './resetTypes'

export const objectives = [
    // Daily Reset objectives
    {
        name: "Balrog",
        image: require("../static/images/balrog.png"),
        difficulty: "Easy",
        resetType: weeklyBossReset
    },
    {
        name: "Zakum",
        image: require("../static/images/zakum.png"),
        difficulty: "Easy / Normal",
        resetType: dailyReset
    },
    {
        name: "Ursus",
        image: require("../static/images/ursus.png"),
        difficulty: "Normal",
        resetType: dailyReset
    },
    {
        name: "Magnus",
        image: require("../static/images/magnus.png"),
        difficulty: "Easy / Normal",
        resetType: dailyReset
    },
    {
        name: "Hilla",
        image: require("../static/images/hilla.png"),
        difficulty: "Normal",
        resetType: dailyReset
    },
    {
        name: "OMNI-CLN",
        image: require("../static/images/omni-cln.png"),
        difficulty: "Normal",
        resetType: dailyReset
    },
    {
        name: "Papulatus",
        image: require("../static/images/papulatus.png"),
        difficulty: "Easy / Normal",
        resetType: dailyReset
    },    
    {
        name: "Pierre",
        image: require("../static/images/pierre.png"),
        difficulty: "Normal",
        resetType: dailyReset
    },    
    {
        name: "Von Bon",
        image: require("../static/images/von_bon.png"),
        difficulty: "Normal",
        resetType: dailyReset
    },
    {
        name: "Crimson Queen",
        image: require("../static/images/crimson_queen.png"),
        difficulty: "Normal",
        resetType: dailyReset
    },
    {
        name: "Vellum",
        image: require("../static/images/vellum.png"),
        difficulty: "Normal",
        resetType: dailyReset
    },
    {
        name: "Von Leon",
        image: require("../static/images/von_leon.png"),
        difficulty: "Easy / Normal / Hard",
        resetType: dailyReset
    },
    {
        name: "Horntail",
        image: require("../static/images/horntail.png"),
        difficulty: "Easy / Normal / Chaos",
        resetType: dailyReset
    },
    {
        name: "Arkarium",
        image: require("../static/images/arkarium.png"),
        difficulty: "Easy / Normal",
        resetType: dailyReset
    },
    {
        name: "Pink Bean",
        image: require("../static/images/pink_bean.png"),
        difficulty: "Normal",
        resetType: dailyReset
    },
    {
        name: "Gollux",
        image: require("../static/images/gollux.png"),
        difficulty: "Easy / Normal / Hard / Hell",
        resetType: dailyReset
    },
    {
        name: "Ranmaru",
        image: require("../static/images/ranmaru.png"),
        difficulty: "Normal / Hard",
        resetType: dailyReset
    },
    // Weekly Boss Reset objectives
    {
        name: "Magnus",
        image: require("../static/images/magnus.png"),
        difficulty: "Hard",
        resetType: weeklyBossReset
    }
]

export const dailyObjectives = objectives.filter((objective) => {
    return objective.resetType === dailyReset
})