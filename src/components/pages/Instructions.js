import React from 'react'

// Material UI components
import { 
    Box,
    Paper,
    Grid,
    Typography
} from '@material-ui/core'
import MouseIcon from '@material-ui/icons/Mouse'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SettingsIcon from '@material-ui/icons/Settings'
import SaveIcon from '@material-ui/icons/Save'

const instructions = [
    {
        icon: <MouseIcon/>,
        text: "Click on an objective to mark it as completed, completed objectives are marked with a stamp."
    },
    {
        icon: <AccessTimeIcon/>,
        text: "Objectives will be reset when resets happen in-game, even when the app is not open in your browser!"
    },    
    {
        icon: <SettingsIcon/>,
        text: "You can hide objectives that you haven't unlocked yet in the Settings menu."
    },
    {
        icon: <SaveIcon/>,
        text: "Your progress will be saved in your browser's storage. When you come back, you'll know where you left off."
    }
]

export default class Instructions extends React.Component {
    render() {
        return(
                <Box m={3}>
                    <Grid
                    container
                    justify="center">
                        <Paper>
                            {this.renderInstructions(instructions)}
                        </Paper>
                    </Grid>
                </Box>
        )
    }

    renderInstructions(instructions) {
        var instructionsToRender = []
        instructions.forEach((instruction) => {
            instructionsToRender.push(
                <Grid
                item
                key={instructionsToRender.length}
                xs={12}>
                    <Box
                    p={2}
                    m={2}>
                        <Box
                        p={1}>
                            {instruction.icon}
                        </Box>

                        <Typography>
                            {instruction.text}
                        </Typography>  
                    </Box>
                </Grid>
            )
        })

        return instructionsToRender
    }
}