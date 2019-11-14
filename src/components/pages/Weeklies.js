import React from 'react'
import { withStyles } from '@material-ui/core/styles';

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
                        <GridPanel 
                        title="Weekly Bosses"
                        resetType={weeklyBossReset}>
                            { this.renderObjectives(weeklyBosses) }
                        </GridPanel>
                        <GridPanel 
                        title="Weekly Quests"
                        resetType={weeklyQuestReset}>
                            { this.renderObjectives(weeklyQuests) }
                        </GridPanel>
                    </Box>
                </Box>
            </Container> 
        )
    }

    renderObjectives(objectives) {
        return objectives.map((objective, index) =>
            <ObjectiveCard objective={objective} key={index}/>
        )
    }
}

export default withStyles(styles)(Weeklies)