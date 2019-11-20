import React from 'react'
import { connect } from 'react-redux'

import {  } from '../actions/globalSnackbarActions'

import { 
    closeGlobalSnackbar
} from '../actions/globalSnackbarActions'

// Material UI components
import { Snackbar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

class GlobalSnackbar extends React.Component {
    constructor(props) {
        super(props)

        this.handleClose = this.handleClose.bind(this)
    }

    render() {
        return(
            <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={this.props.open}
            message={this.props.message}
            autoHideDuration={6000}
            onClose={this.handleClose}
            action={
                <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                onClick={this.handleClose}>
                    <CloseIcon />
                </IconButton>
            }/>
        )
    }

    handleClose() {
        this.props.closeGlobalSnackbar()
    }
}

const mapStateToProps = (state) => {
    return state.globalSnackbar
}

const mapDispatchToProps = {
    closeGlobalSnackbar
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSnackbar)