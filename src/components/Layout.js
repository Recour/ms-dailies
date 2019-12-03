import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import {images} from "../data/images";

const styles = {
    background: {
        backgroundImage: `url(${images.background})`,
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