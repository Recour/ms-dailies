import React from 'react'

// Own components
import ResetTimer from '../ResetTimer'
import GridPanel from '../GridPanel'
import DailyBoss from '../DailyBoss'

// Material UI components
import { 
    Box,
    Container,
    Typography,
    Grid
} from '@material-ui/core'

import data from '../../data/data'

class Dailies extends React.Component {
    constructor(props) {
        super(props)

        this.renderDailyBosses = this.renderDailyBosses.bind(this)
    }

    render() {
        return (
            <Box m={3}>
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={1}>
                        <ResetTimer resetTime={data.dailies.resetTime}/>
                    </Grid>
                    
                    <Grid item>
                        <GridPanel title="Bosses">
                            { this.renderDailyBosses(data.dailies.bosses) }
                        </GridPanel>
                    </Grid>
                </Grid>
            </Box>
        )
    }

    renderDailyBosses(dailyBosses) {
        return dailyBosses.map((dailyBoss, index) =>
            <DailyBoss boss={dailyBoss} key={index}/>
        )
    }
}

export default Dailies;