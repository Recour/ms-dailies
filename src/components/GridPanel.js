import React from 'react'
import { withStyles } from '@material-ui/core/styles';

// Material UI components
import {     
    Grid,
    Typography,
    Paper,
    Box
} from '@material-ui/core'

import ResetCountdown from './ResetCountdown'
import theme from '../style/theme';

const styles = {
    expansionPanelDetails: {
        marginTop: theme.spacing(1)
    },
    resetCountdown: {
        marginRight: theme.spacing(1)
    }
}

class GridPanel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            expanded: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.renderChildren = this.renderChildren.bind(this)
    }

    render() {
        const { classes } = this.props
        return(
            <Paper>
                <Box p={3}>
                    <Grid 
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                        <Grid
                        item>
                            <Typography
                            variant="h4">
                                
                                    {this.props.title}
                                
                            </Typography>
                        </Grid>

                        <Grid 
                        item>
                            <ResetCountdown
                            className={classes.resetCountdown} 
                            resetType={this.props.resetType}/>
                        </Grid>
                    </Grid>

                    <Grid 
                    className={classes.expansionPanelDetails} 
                    container 
                    spacing={2}>
                        { this.renderChildren() }
                    </Grid>
                </Box>
            </Paper>
        )
    }

    renderChildren() {
        return this.props.children.map((child, index) => 
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                {child}
            </Grid>
        )
    }

    handleChange() {
        this.setState({ expanded: !this.state.expanded })
    }
}

export default withStyles(styles)(GridPanel)