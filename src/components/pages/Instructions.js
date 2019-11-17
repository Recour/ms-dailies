import React from 'react'

// Material UI components
import { 
    Container,
    Box,
    Paper,
    Grid,
    Typography
} from '@material-ui/core'
import MouseIcon from '@material-ui/icons/Mouse'
import SaveIcon from '@material-ui/icons/Save'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

const instructions = [
    {
        icon: <MouseIcon/>,
        primary: "Click on an objective to mark it as completed,",
        secondary: "completed objectives are colored in green."
    },
    {
        icon: <AccessTimeIcon/>,
        primary: "Objectives will be reset when resets happen in-game,",
        secondary: "even when the app is not open in your browser!"
    },
    {
        icon: <SaveIcon/>,
        primary: "Your progress will be saved in your browser's storage,",
        secondary: "when you come back, you'll know where you left off."
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
                    p={3}
                    m={3}>
                        {instruction.icon}

                        <Typography>
                            <strong>{instruction.primary}</strong>
                        </Typography>

                        <Typography>
                            {instruction.secondary}
                        </Typography>    
                    </Box>
                </Grid>
            )
        })

        return instructionsToRender
    }
}