import React from 'react'

// Material UI components
import { 
    Box,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'
import MouseIcon from '@material-ui/icons/Mouse'
import SaveIcon from '@material-ui/icons/Save'

export default class Instructions extends React.Component {
    render() {
        return(
            <Box m={3}>
                <Paper>
                    <Box p={3}>
                        <List>
                            <ListItem>
                                <ListItemIcon><MouseIcon/></ListItemIcon>
                                <ListItemText>Click on an item to mark it as completed</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><SaveIcon/></ListItemIcon>
                                <ListItemText>Your progress will be saved in your browser's storage</ListItemText>
                            </ListItem>
                        </List>
                    </Box>
                </Paper>
            </Box>
        )
    }
}