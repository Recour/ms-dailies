import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { toggleObjectiveCompleted } from '../../actions/completedObjectivesActions'

// Material UI components
import { 
    Box,
    Container
} from '@material-ui/core'

// Own components
import GridPanel from '../GridPanel'
import ObjectiveCard from '../ObjectiveCard'

// Data
import { dailyBosses, dailyQuests } from '../../data/objectives'
import { resetTypesDailies, dailyReset } from '../../data/resetTypes'

const styles = {
    background: {
        backgroundColor: 'rgb(240,240,240)',
        borderRadius: '10px'
    }
}

class Dailies extends React.Component {
    constructor(props) {
        super(props)

        this.renderObjectives = this.renderObjectives.bind(this)
    }

    render() {
        const { classes } = this.props
        return (   
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
                            title="DAILY BOSSES"
                            resetType={dailyReset}>
                                {this.renderObjectives(dailyBosses.objectives, dailyReset)}
                            </GridPanel>
                        </Box>

                        <GridPanel 
                        title="DAILY QUESTS"
                        resetType={dailyReset}>
                            {this.renderObjectives(dailyQuests.objectives, dailyReset)}
                        </GridPanel>
                    </Box>
                </Box>
            </Container>
        )
    }

    renderObjectives(objectives, resetType) {
        return objectives.filter((objective) => 
            !this.props[resetType.name].disabledObjectives.includes(objective.name)
        )
        .map((objective, index) =>
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

    resetTypesDailies.forEach((resetType) => {
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Dailies))