import React from 'react'

// Own components
import GridPanel from '../GridPanel'
import ObjectiveCard from '../ObjectiveCard'
import ResetCountdown from '../ResetCountdown'

// Material UI components
import { 
    Box,
    Grid
} from '@material-ui/core'

import { dailyBosses, dailyQuests } from '../../data/objectives'
import { dailyReset } from '../../data/resetTypes'

class Dailies extends React.Component {
    constructor(props) {
        super(props)

        this.renderObjectives = this.renderObjectives.bind(this)
    }

    render() {
        return (
            <Box m={3}>
                <Grid container justify="center" spacing={2}>
                    <Grid item>
                        <ResetCountdown resetType={dailyReset} style={{ position: 'fixed' }}/>
                    </Grid>

                    <Grid item xs={12}>
                        <GridPanel title="Daily Bosses">
                            { this.renderObjectives(dailyBosses) }
                        </GridPanel>
                    </Grid>

                    <Grid item xs={12}>
                        <GridPanel title="Daily Quests">
                            { this.renderObjectives(dailyQuests) }
                        </GridPanel>
                    </Grid>
                </Grid>
            </Box>
        )
    }

    renderObjectives(objectives) {
        return objectives.map((objective, index) =>
            <ObjectiveCard objective={objective} key={index}/>
        )
    }
}

export default Dailies;