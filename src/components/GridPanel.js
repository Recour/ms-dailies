import React from 'react'
import { withStyles } from '@material-ui/core/styles';

// Material UI components
import {     
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Grid,
    Typography,
    Divider
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
            <ExpansionPanel
            expanded={this.state.expanded}
            onChange={this.handleChange}>
                <ExpansionPanelSummary
                expandIcon={ <ExpandMoreIcon /> }>
                    <Grid 
                    container
                    justify="space-between">
                        <Grid
                        item
                        justify="center"
                        alignItems="center">
                            <Typography
                            variant="h6">
                                {this.props.title}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <ResetCountdown
                            className={classes.resetCountdown} 
                            resetType={this.props.resetType}/>
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>

                <Divider/>

                <ExpansionPanelDetails>
                    <Grid 
                    className={classes.expansionPanelDetails} 
                    container 
                    spacing={2}>
                        { this.renderChildren() }
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }

    renderChildren() {
        return this.props.children.map((child, index) => 
            <Grid item xs={12} sm={4} md={3} lg={2} key={index}>
                {child}
            </Grid>
        )
    }

    handleChange() {
        this.setState({ expanded: !this.state.expanded })
    }
}

export default withStyles(styles)(GridPanel)