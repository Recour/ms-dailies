import React from 'react'

// Material UI components
import { Snackbar } from '@material-ui/core'

export default class OwnSnackbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: this.props.open
        }

        this.handleClose = this.handleClose.bind(this)
    }

    render() {
        return(
            <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={ this.state.isOpen }
            message={ this.props.message }
            autoHideDuration="6000"
            onClose={this.handleClose}/>
        )
    }

    handleClose() {
        this.setState({ isOpen: false })
    }
}