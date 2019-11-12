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

import { dailyObjectives } from '../../data/objectives'
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
                        <ResetCountdown resetType={dailyReset}/>
                    </Grid>

                    <Grid item>
                        <GridPanel title="Dailies">
                            { this.renderObjectives(dailyObjectives) }
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