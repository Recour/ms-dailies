import React from 'react'
import { 
    Box,
    Typography,
    Container
} from '@material-ui/core'

export default class About extends React.Component {
    render() {
        return(
            <Box m={3}>
                <Typography variant="body1">
                    This tool can be used to keep track of your daily or weekly objectives.<br></br>
                    Click on an item to mark it as completed. It's as simple as that!<br></br>
                    <strong>Dailies</strong> will save your progress in your browser's storage, so
                    that when you come back, you'll know where you left off.
                </Typography>
            </Box>
        )
    }
}