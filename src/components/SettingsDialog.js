import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { toggleObjectiveDisabled } from '../actions/disabledObjectivesActions'

import { 
    Dialog, 
    DialogTitle,
    DialogContent, 
    DialogContentText,
    Typography,
    Divider,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Grid,
    Container,
    Box
} from '@material-ui/core'

import { objectiveTypes } from '../data/objectives'
import { resetTypes } from '../data/resetTypes'

const styles = {

}

class SettingsDialog extends React.Component {
    constructor(props) {
        super(props)

        this.renderCheckboxes = this.renderCheckboxes.bind(this)
        this.renderGrids = this.renderGrids.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        const { classes } = this.props
        return(
            <Dialog
            open={this.props.open}
            onClose={this.props.onClose}
            fullWidth={true}
            maxWidth = {'md'}>
                <DialogTitle>
                    <Typography>
                        Settings
                    </Typography>
                </DialogTitle>

                <Divider/>

                <DialogContent>
                    <DialogContentText>
                        <Box
                        my={1}>
                            <Typography 
                            variant="h5">
                                Visible objectives
                            </Typography>
                        </Box>

                        <Grid 
                        container>
                            {this.renderGrids(objectiveTypes)}
                        </Grid>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        )
    }

    renderGrids(objectiveTypes) {
        return objectiveTypes.map((objectiveType, index) => 
            <Grid
            item
            xs={12}
            sm={3}
            key={index}>
                <Container>
                <Typography
                variant="h6">
                    {objectiveType.name}
                </Typography>
                
                <FormGroup>
                    {this.renderCheckboxes(objectiveType.objectives)}
                </FormGroup>
                </Container>
            </Grid>
        )
    }

    renderCheckboxes(objectives) {
        return objectives.map((objective, index) => 
            <FormControlLabel
            label={objective.name}
            control={
                <Checkbox 
                checked={!this.props.disabledObjectives[objective.resetType.name].includes(objective.name)}
                onChange={this.handleChange(objective)}
                value={objective}/>
            }
            key={index}/>
        )
    }

    handleChange = objective => event => {
        this.props.toggleObjectiveDisabled(objective.name, objective.resetType)
    }
}

const mapStateToProps = (state) => {
    return {
        disabledObjectives: state.disabledObjectives
    }
}

const mapDispatchToProps = {
    toggleObjectiveDisabled
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SettingsDialog))