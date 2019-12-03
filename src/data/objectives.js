import { 
    dailyReset,
    weeklyBossReset,
    weeklyQuestReset
} from './resetTypes'
import {images} from "./images";

export const objectives = [
    // Daily Bosses
    {
        name: "Balrog",
        image: images.bosses['Balrog'],
        subtext: "Easy",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Zakum",
        image: images.bosses['Zakum'],
        subtext: "Easy / Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Ursus",
        image: images.bosses['Ursus'],
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Magnus",
        image: images.bosses['Magnus'],
        subtext: "Easy / Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Hilla",
        image: images.bosses['Hilla'],
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "OMNI-CLN",
        image: images.bosses['OMNI-CLN'],
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Papulatus",
        image: images.bosses['Papulatus'],
        subtext: "Easy / Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },    
    {
        name: "Pierre",
        image: images.bosses['Pierre'],
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },    
    {
        name: "Von Bon",
        image: images.bosses['Von Bon'],
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Crimson Queen",
        image: images.bosses['Crimson Queen'],
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Vellum",
        image: images.bosses['Vellum'],
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Von Leon",
        image: images.bosses['Von Leon'],
        subtext: "Easy / Normal / Hard",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Horntail",
        image: images.bosses['Horntail'],
        subtext: "Easy / Normal / Chaos",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Arkarium",
        image: images.bosses['Arkarium'],
        subtext: "Easy / Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Pink Bean",
        image: images.bosses['Pink Bean'],
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Gollux",
        image: images.bosses['Gollux'],
        subtext: "Easy / Normal / Hard / Hell",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Ranmaru",
        image: images.bosses['Ranmaru'],
        subtext: "Normal / Hard",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    {
        name: "Julieta",
        image: images.bosses['Julieta'],
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: dailyReset
    },
    // Daily Quests
    {
        name: "Commerci",
        image: images.quests['Commerci'],
        subtext: "Solo",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Yu Garden",
        image: images.quests['Yu Garden'],
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Vanishing Journey",
        image: images.quests['Vanishing Journey'],
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Erda Spectrum",
        image: images.quests['Erda Spectrum'],
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Chu Chu Island",
        image: images.quests['Chu Chu Island'],
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Hungry Muto",
        image: images.quests['Hungry Muto'],
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Lachelein",
        image: images.quests['Lachelein'],
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Dream Defender",
        image: images.quests['Dream Defender'],
        subtext: "Solo",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Arcana",
        image: images.quests['Arcana'],
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Spirit Savior",
        image: images.quests['Spirit Savior'],
        subtext: "Solo",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Morass",
        image: images.quests['Morass'],
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Esfera",
        image: images.quests['Esfera'],
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Tenebris",
        image: images.quests['Tenebris'],
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Monster Park",
        image: images.quests['Monster Park'],
        subtext: "Solo",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Legion",
        image: images.quests['Legion'],
        subtext: "Solo",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Guild Gifts",
        image: images.quests['Guild Gifts'],
        subtext: "Claim",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Fairy Bros Gift",
        image: images.quests['Fairy Bros Gift'],
        subtext: "Claim",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "Reward Points",
        image: images.quests['Reward Points'],
        subtext: "Claim",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    {
        name: "MVP Reward",
        image: images.quests['MVP Reward'],
        subtext: "Claim",
        objectiveType: "Quest",
        resetType: dailyReset
    },
    // Weekly Bosses
    {
        name: "Zakum",
        image: images.bosses['Zakum'],
        subtext: "Chaos",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Magnus",
        image: images.bosses['Magnus'],
        subtext: "Hard",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Hilla",
        image: images.bosses['Hilla'],
        subtext: "Hard",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Papulatus",
        image: images.bosses['Papulatus'],
        subtext: "Chaos",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },    
    {
        name: "Pierre",
        image: images.bosses['Pierre'],
        subtext: "Chaos",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },    
    {
        name: "Von Bon",
        image: images.bosses['Von Bon'],
        subtext: "Chaos",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Crimson Queen",
        image: images.bosses['Crimson Queen'],
        subtext: "Chaos",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Vellum",
        image: images.bosses['Vellum'],
        subtext: "Chaos",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Pink Bean",
        image: images.bosses['Pink Bean'],
        subtext: "Chaos",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Cygnus",
        image: images.bosses['Cygnus'],
        subtext: "Easy / Normal",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Lotus",
        image: images.bosses['Lotus'],
        subtext: "Normal / Hard",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Damien",
        image: images.bosses['Damien'],
        subtext: "Normal / Hard",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Lucid",
        image: images.bosses['Lucid'],
        subtext: "Normal / Hard",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Gloom",
        image: images.bosses['Gloom'],
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Verus Hilla",
        image: images.bosses['Verus Hilla'],
        subtext: "Hard",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Darknell",
        image: images.bosses['Darknell'],
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },    
    {
        name: "Will",
        image: images.bosses['Will'],
        subtext: "Normal / Hard",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    {
        name: "Princess No",
        image: images.bosses['Princess No'],
        subtext: "Normal",
        objectiveType: "Boss",
        resetType: weeklyBossReset
    },
    // TODO: add Black Mage
    // Weekly Quests
    {
        name: "Mu Lung Dojo",
        image: images.quests['Mu Lung Dojo'],
        subtext: "Solo",
        objectiveType: "Quest",
        resetType: weeklyQuestReset
    },
    {
        name: "Kritias",
        image: images.quests['Kritias'],
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: weeklyQuestReset
    },
    {
        name: "Haven",
        image: images.quests['Haven'],
        subtext: "Solo / Party",
        objectiveType: "Quest",
        resetType: weeklyQuestReset
    },
    {
        name: "Dark World Tree",
        image: images.quests['Dark World Tree'],
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