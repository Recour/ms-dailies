import React from 'react'

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

export default class GridPanel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            expanded: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.renderChildren = this.renderChildren.bind(this)
    }

    render() {
        return(
            <ExpansionPanel
            expanded={this.state.expanded}
            onChange={this.handleChange}>
                <ExpansionPanelSummary
                expandIcon={ <ExpandMoreIcon /> }>
                    <Typography variant="h6">
                        {this.props.title}
                    </Typography>
                    <Divider></Divider>
                    <ResetCountdown resetType={this.props.resetType}/>
                </ExpansionPanelSummary>

                <Divider/>

                <ExpansionPanelDetails>
                    <Grid style={{ marginTop: '1px' }} container spacing={2}>
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