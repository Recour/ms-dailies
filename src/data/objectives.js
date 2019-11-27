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
        name: "Commerci Voyages",
        image: require("../static/images/commerci_voyages.png"),
        subtext: "Solo",
        objectiveType: "Quest",
        resetType: dailyReset
    },    
    {
        name: "Vanishing Journey",
        image: require("../static/images/vanishing_journey.png"),
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Erda Spectrum",
        image: require("../static/images/erda_spectrum.png"),
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Chu Chu Island",
        image: require("../static/images/chu_chu_island.png"),
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Hungry Muto",
        image: require("../static/images/hungry_muto.png"),
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Lachelein",
        image: require("../static/images/lachelein.png"),
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Dream Defender",
        image: require("../static/images/dream_defender.png"),
        subtext: "Solo",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Arcana",
        image: require("../static/images/arcana.png"),
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Spirit Savior",
        image: require("../static/images/spirit_savior.png"),
        subtext: "Solo",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Morass",
        image: require("../static/images/morass.png"),
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Esfera",
        image: require("../static/images/esfera.png"),
        subtext: "Solo / Party",
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
    },
    {
        name: "Pierre",
        image: require("../static/images/pierre.png"),
        subtext: "Chaos",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },    
    {
        name: "Von Bon",
        image: require("../static/images/von_bon.png"),
        subtext: "Chaos",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Crimson Queen",
        image: require("../static/images/crimson_queen.png"),
        subtext: "Chaos",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Vellum",
        image: require("../static/images/vellum.png"),
        subtext: "Chaos",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Cygnus",
        image: require("../static/images/cygnus.png"),
        subtext: "Easy / Normal",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Lotus",
        image: require("../static/images/lotus.png"),
        subtext: "Normal / Hard",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Damien",
        image: require("../static/images/damien.png"),
        subtext: "Normal / Hard",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Lucid",
        image: require("../static/images/lucid.png"),
        subtext: "Normal / Hard",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Will",
        image: require("../static/images/will.png"),
        subtext: "Normal / Hard",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Gloom",
        image: require("../static/images/gloom.png"),
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Darknell",
        image: require("../static/images/darknell.png"),
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    // TODO: add Black Mage
    // Weekly Quests
    {
        name: "Haven",
        image: require("../static/images/haven.png"),
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: weeklyQuestReset
    },
    {
        name: "Dark World Tree",
        image: require("../static/images/dark_world_tree.png"),
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: weeklyQuestReset
    }
]

export const dailyBosses = {
    name: "Daily Bosses",
    objectives: objectives.filter((objective) => {
                    return (objective.resetType === dailyReset && objective.objectiveType === "Boss")
                })
}

export const dailyQuests = {
    name: "Daily Quests",
    objectives: objectives.filter((objective) => {
                    return (objective.resetType === dailyReset && objective.objectiveType === "Quest")
                })
}

export const weeklyBosses = {
    name: "Weekly Bosses",
    objectives: objectives.filter((objective) => {
                    return (objective.resetType === weeklyBossReset && objective.objectiveType === "Boss")
                })
}

export const weeklyQuests = {
    name: "Weekly Quests",
    objectives: objectives.filter((objective) => {
                    return (objective.resetType === weeklyQuestReset && objective.objectiveType === "Quest")
                })
}

export const objectiveTypes = [
    dailyBosses,
    dailyQuests,
    weeklyBosses,
    weeklyQuests
]