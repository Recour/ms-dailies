import React from 'react'

// Material UI components
import { 
    Container,
    Box,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'
import MouseIcon from '@material-ui/icons/Mouse'
import SaveIcon from '@material-ui/icons/Save'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

export default class Instructions extends React.Component {
    render() {
        return(
            <Container>
                <Box m={3}>
                    <Paper>
                        <List>
                            <ListItem>
                                <ListItemIcon><MouseIcon/></ListItemIcon>
                                <ListItemText 
                                primary={<strong>Click on an objective to mark it as completed,</strong>}
                                secondary={"completed objectives are colored in green."}/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><AccessTimeIcon/></ListItemIcon>
                                <ListItemText 
                                primary={<strong>Objectives will be reset when resets happen in-game,</strong>}
                                secondary={"even when the app is not open in your browser!"}/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><SaveIcon/></ListItemIcon>
                                <ListItemText 
                                primary={<strong>Your progress will be saved in your browser's storage,</strong>}
                                secondary={"when you come back, you'll know where you left off."}/>
                            </ListItem>
                        </List>
                    </Paper>
                </Box>
            </Container>
        )
    }
}