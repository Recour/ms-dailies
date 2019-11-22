import React from 'react'
import { withStyles } from '@material-ui/core/styles';

// Material UI components
import {     
    Grid,
    Typography,
    Paper,
    Box,
    Divider
} from '@material-ui/core'

import ResetCountdown from './ResetCountdown'

const styles = {

}

class GridPanel extends React.Component {
    constructor(props) {
        super(props)

        this.renderChildren = this.renderChildren.bind(this)
    }

    render() {
        const { classes } = this.props
        return(
            <Paper>
                <Box p={3}>
                    <Box
                    mb={1}>
                        <Grid 
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-end">
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
                                resetType={this.props.resetType}/>
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider/>

                    <Box
                    mt={2}>
                        <Grid 
                        container 
                        spacing={2}>
                            { this.renderChildren() }
                        </Grid>
                    </Box>
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
}

export default withStyles(styles)(GridPanel)