import React from 'react'

// Own components
import GridPanel from '../GridPanel'
import BossCard from '../BossCard'

// Material UI components
import { 
    Box,
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
            <BossCard boss={dailyBoss} key={index}/>
        )
    }
}

export default Dailies;