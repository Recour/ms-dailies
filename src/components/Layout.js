import React from 'react'
import { withStyles } from '@material-ui/core/styles';

// Background image
import Image from '../static/images/maplestory2.png'

const styles = {
    background: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        height: '100%'
    }
}

class Layout extends React.Component {
    render() {
        const { classes } = this.props
        return(
            <div className={classes.background}>
                {this.props.children}
            </div>
        )
    }
}

export default withStyles(styles)(Layout)