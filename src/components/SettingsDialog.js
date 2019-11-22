import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { toggleObjectiveDisabled } from '../actions/objectivesActions'

import { 
    Dialog, 
    DialogTitle,
    DialogContent, 
    DialogContentText,
    Typography,
    Divider,
    Checkbox,
    FormGroup,
    FormControlLabel
} from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'

import { objectives } from '../data/objectives'

const styles = {

}

class SettingsDialog extends React.Component {
    constructor(props) {
        super(props)

        this.renderCheckboxes = this.renderCheckboxes.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        const { classes } = this.props
        return(
            <Dialog
            open={this.props.open}
            onClose={this.props.onClose}>
                <DialogTitle>
                    <SettingsIcon/>
                    <Typography>
                        Settings
                    </Typography>
                </DialogTitle>

                <Divider/>

                <DialogContent>
                    <DialogContentText>
                        <FormGroup>
                            {this.renderCheckboxes(objectives)}
                        </FormGroup>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        )
    }

    renderCheckboxes(objectives) {
        return objectives.map((objective, index) => 
            <FormControlLabel
            label={objective.name}
            control={
                <Checkbox 
                checked={this.props[objective.resetType.name].disabledObjectives.includes(objective.name)} 
                onChange={this.handleChange(objective)}/>
            }
            key={index}/>
        )
    }

    handleChange(objective) {
        // this.props.toggleObjectiveDisabled(objective.resetType, objective.name)
    }
}

const mapStateToProps = (state) => {
    return state.objectives
}

const mapDispatchToProps = {
    toggleObjectiveDisabled
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SettingsDialog))