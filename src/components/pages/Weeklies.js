import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

// Own components
import GridPanel from '../GridPanel'
import ObjectiveCard from '../ObjectiveCard'

// Material UI components
import { 
    Box,
    Container
} from '@material-ui/core'

import { weeklyBosses, weeklyQuests } from '../../data/objectives'
import { weeklyBossReset, weeklyQuestReset } from '../../data/resetTypes'

const styles = {
    background: {
        backgroundColor: 'rgb(245,245,245)',
        borderRadius: '10px'
    }
}

class Weeklies extends React.Component {
    constructor(props) {
        super(props)

        this.renderObjectives = this.renderObjectives.bind(this)
    }

    render() {
        const { classes } = this.props
        return(
            <Container 
            maxWidth="lg">
                <Box 
                py={[1, 2, 3, 4, 5]}>
                    <Box
                    className={classes.background}  
                    p={[1, 2, 3, 4, 5]}>
                        <Box
                        mb={[1, 2, 3, 4, 5]}>
                            <GridPanel 
                            title="WEEKLY BOSSES"
                            resetType={weeklyBossReset}>
                                { this.renderObjectives(weeklyBosses) }
                            </GridPanel>
                        </Box>

                        <GridPanel 
                        title="WEEKLY QUESTS"
                        resetType={weeklyQuestReset}>
                            { this.renderObjectives(weeklyQuests) }
                        </GridPanel>
                    </Box>
                </Box>
            </Container> 
        )
    }

    renderObjectives(objectives) {
        var objectivesToRender = objectives.filter((objective) => {
            if(!this.props.disabledObjectives.includes(objective.name)) {
                return objective
            }
        })

        return objectivesToRender.map((objective, index) =>
            <ObjectiveCard objective={objective} key={index}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state.objectives["Weekly Boss Reset"] // TODO: add all states & make dynamic
} 

export default withStyles(styles)(connect(mapStateToProps)(Weeklies))