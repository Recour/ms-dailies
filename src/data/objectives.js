import { 
    dailyReset,
    weeklyBossReset
} from './resetTypes'

export const objectives = [
    // Daily Bosses
    {
        name: "Balrog",
        image: require("../static/images/balrog.png"),
        difficulty: "Easy",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Zakum",
        image: require("../static/images/zakum.png"),
        difficulty: "Easy / Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Ursus",
        image: require("../static/images/ursus.png"),
        difficulty: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Magnus",
        image: require("../static/images/magnus.png"),
        difficulty: "Easy / Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Hilla",
        image: require("../static/images/hilla.png"),
        difficulty: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "OMNI-CLN",
        image: require("../static/images/omni-cln.png"),
        difficulty: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Papulatus",
        image: require("../static/images/papulatus.png"),
        difficulty: "Easy / Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },    
    {
        name: "Pierre",
        image: require("../static/images/pierre.png"),
        difficulty: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },    
    {
        name: "Von Bon",
        image: require("../static/images/von_bon.png"),
        difficulty: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Crimson Queen",
        image: require("../static/images/crimson_queen.png"),
        difficulty: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Vellum",
        image: require("../static/images/vellum.png"),
        difficulty: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Von Leon",
        image: require("../static/images/von_leon.png"),
        difficulty: "Easy / Normal / Hard",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Horntail",
        image: require("../static/images/horntail.png"),
        difficulty: "Easy / Normal / Chaos",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Arkarium",
        image: require("../static/images/arkarium.png"),
        difficulty: "Easy / Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Pink Bean",
        image: require("../static/images/pink_bean.png"),
        difficulty: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Gollux",
        image: require("../static/images/gollux.png"),
        difficulty: "Easy / Normal / Hard / Hell",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Ranmaru",
        image: require("../static/images/ranmaru.png"),
        difficulty: "Normal / Hard",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    // Daily Quests    
    {
        name: "Monster Park",
        image: require("../static/images/monster_park.png"),
        difficulty: "",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Commerci Voyages",
        image: require("../static/images/commerci_voyages.png"),
        difficulty: "",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Legion",
        image: require("../static/images/legion.png"),
        difficulty: "",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Vanishing Journey Research",
        image: require("../static/images/vanishing_journey_research.png"),
        difficulty: "",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Hungry Muto",
        image: require("../static/images/hungry_muto.png"),
        difficulty: "",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Dream Defender",
        image: require("../static/images/dream_defender.png"),
        difficulty: "",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    // Weekly Bosses
    {
        name: "Magnus",
        image: require("../static/images/magnus.png"),
        difficulty: "Hard",
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