import { 
    dailyReset,
    weeklyBossReset,
    weeklyQuestReset
} from './resetTypes'

export const objectives = [
    // Daily Bosses
    {
        name: "Balrog",
        image: require("../static/images/balrog.png"),
        subtext: "Easy",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Zakum",
        image: require("../static/images/zakum.png"),
        subtext: "Easy / Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Ursus",
        image: require("../static/images/ursus.png"),
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Magnus",
        image: require("../static/images/magnus.png"),
        subtext: "Easy / Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Hilla",
        image: require("../static/images/hilla.png"),
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "OMNI-CLN",
        image: require("../static/images/omni-cln.png"),
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Papulatus",
        image: require("../static/images/papulatus.png"),
        subtext: "Easy / Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },    
    {
        name: "Pierre",
        image: require("../static/images/pierre.png"),
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },    
    {
        name: "Von Bon",
        image: require("../static/images/von_bon.png"),
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Crimson Queen",
        image: require("../static/images/crimson_queen.png"),
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Vellum",
        image: require("../static/images/vellum.png"),
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Von Leon",
        image: require("../static/images/von_leon.png"),
        subtext: "Easy / Normal / Hard",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Horntail",
        image: require("../static/images/horntail.png"),
        subtext: "Easy / Normal / Chaos",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Arkarium",
        image: require("../static/images/arkarium.png"),
        subtext: "Easy / Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Pink Bean",
        image: require("../static/images/pink_bean.png"),
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Gollux",
        image: require("../static/images/gollux.png"),
        subtext: "Easy / Normal / Hard / Hell",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Ranmaru",
        image: require("../static/images/ranmaru.png"),
        subtext: "Normal / Hard",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    // Daily Quests    
    {
        name: "Monster Park",
        image: require("../static/images/monster_park.png"),
        subtext: "",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Commerci Voyages",
        image: require("../static/images/commerci_voyages.png"),
        subtext: "",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Legion",
        image: require("../static/images/legion.png"),
        subtext: "",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Vanishing Journey Research",
        image: require("../static/images/vanishing_journey_research.png"),
        subtext: "",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Hungry Muto",
        image: require("../static/images/hungry_muto.png"),
        subtext: "",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Dream Defender",
        image: require("../static/images/dream_defender.png"),
        subtext: "",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    // Weekly Bosses
    {
        name: "Magnus",
        image: require("../static/images/magnus.png"),
        subtext: "Hard",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    }
]

export const dailyBosses = objectives.filter((objective) => {
    return (objective.resetType === dailyReset && objective.objectiveType === "Boss")
})

export const dailyQuests = objectives.filter((objective) => {
    return (objective.resetType === dailyReset && objective.objectiveType === "Quest")
})

export const weeklyBosses = objectives.filter((objective) => {
    return (objective.resetType === weeklyBossReset && objective.objectiveType === "Boss")
})

export const weeklyQuests = objectives.filter((objective) => {
    return (objective.resetType === weeklyQuestReset && objective.objectiveType === "Quest")
})