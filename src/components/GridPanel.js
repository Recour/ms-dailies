import React from 'react'

// Material UI components
import {     
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Grid,
    Typography,
    Divider,
    Box
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
                </ExpansionPanelSummary>

                <Divider/>

                <ExpansionPanelDetails>
                    <Box m={3}>
                        <Grid container spacing={3}>
                            { this.renderChildren() }
                        </Grid>
                    </Box>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }

    renderChildren() {
        return this.props.children.map((child, index) => 
            <Grid item xs={12} sm={2} key={index}>
                {child}
            </Grid>
        )
    }

    handleChange() {
        this.setState({ expanded: !this.state.expanded })
    }
}