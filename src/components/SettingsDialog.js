import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { 
    Dialog, 
    DialogTitle,
    DialogContent, 
    DialogContentText,
    Typography,
    Divider,
} from '@material-ui/core'

const styles = {

}

class SettingsDialog extends React.Component {
    render() {
        const { classes } = this.props
        return(
            <Dialog
            open={this.props.open}
            onClose={this.props.onClose}>
                <DialogTitle>
                    <Typography
                    variant="h5">
                        Settings
                    </Typography>
                </DialogTitle>

                <Divider/>
                    
                <DialogContent>
                    <DialogContentText>
                        Coming Soon
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styles)(SettingsDialog)