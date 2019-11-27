import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { toggleObjectiveCompleted } from '../../actions/completedObjectivesActions'

// Own components
import GridPanel from '../GridPanel'
import ObjectiveCard from '../ObjectiveCard'

// Material UI components
import { 
    Box,
    Container
} from '@material-ui/core'

import { weeklyBosses, weeklyQuests } from '../../data/objectives'
import { resetTypesWeeklies, weeklyBossReset, weeklyQuestReset } from '../../data/resetTypes'

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
                                {this.renderObjectives(weeklyBosses.objectives, weeklyBossReset)}
                            </GridPanel>
                        </Box>

                        <GridPanel 
                        title="WEEKLY QUESTS"
                        resetType={weeklyQuestReset}>
                            {this.renderObjectives(weeklyQuests.objectives, weeklyQuestReset)}
                        </GridPanel>
                    </Box>
                </Box>
            </Container> 
        )
    }

    renderObjectives(objectives, resetType) {
        var objectivesToRender = objectives.filter((objective) => {
            if(!this.props[resetType.name].disabledObjectives.includes(objective.name)) {
                return objective
            }
        })

        return objectivesToRender.map((objective, index) =>
            <ObjectiveCard 
            objective={objective} 
            key={index} 
            toggleObjectiveCompleted={this.props.toggleObjectiveCompleted}
            isCompleted={this.props[objective.resetType.name].completedObjectives.includes(objective.name)}/>
        )
    }
}

const mapStateToProps = (state) => {
    var stateToMap = {}

    resetTypesWeeklies.forEach((resetType) => {
        stateToMap[resetType.name] = {
            completedObjectives: state.completedObjectives[resetType.name],
            disabledObjectives: state.disabledObjectives[resetType.name]
        }
    })

    return stateToMap
}

const mapDispatchToProps = {
    toggleObjectiveCompleted
}


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Weeklies))