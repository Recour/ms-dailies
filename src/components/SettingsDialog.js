import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { toggleObjectiveDisabled } from '../actions/disabledObjectivesActions'
import {setServer} from "../actions/serverActions";

import { 
    Dialog, 
    DialogTitle,
    DialogContent, 
    DialogContentText,
    Typography,
    Divider,
    Checkbox,
    FormControl,
    RadioGroup,
    Radio,
    FormGroup,
    FormControlLabel,
    Grid,
    Container,
    Box
} from '@material-ui/core'

import {objectiveTypes} from '../data/objectives'
import {servers} from "../data/servers";

const styles = {

}

class SettingsDialog extends React.Component {
    constructor(props) {
        super(props)

        this.renderServerRadioButtons = this.renderServerRadioButtons.bind(this);
        this.renderVisibleObjectiveCheckboxes = this.renderVisibleObjectiveCheckboxes.bind(this);
        this.renderVisibleObjectiveGrids = this.renderVisibleObjectiveGrids.bind(this);
        this.handleChangeVisibleObjectives = this.handleChangeVisibleObjectives.bind(this);
        this.handleChangeServer = this.handleChangeServer.bind(this);
    }

    render() {
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
                    {/* Server */}
                    <DialogContentText>
                        <Box
                            my={1}>
                            <Typography
                                variant="h5">
                                Server
                            </Typography>
                        </Box>

                        <FormControl>
                            <RadioGroup
                                value={this.props.server}
                                onChange={this.handleChangeServer}>
                                {this.renderServerRadioButtons(servers)}
                            </RadioGroup>
                        </FormControl>
                    </DialogContentText>

                    {/* Visible objectives */}
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
                            {this.renderVisibleObjectiveGrids(objectiveTypes)}
                        </Grid>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        )
    }

    renderServerRadioButtons(servers) {
        return Object.keys(servers).map((server, index) =>
            <FormControlLabel
                value={servers[server]}
                control={<Radio />}
                label={servers[server]} />
        )
    }

    renderVisibleObjectiveGrids(objectiveTypes) {
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
                    {this.renderVisibleObjectiveCheckboxes(objectiveType.objectives)}
                </FormGroup>
                </Container>
            </Grid>
        )
    }

    renderVisibleObjectiveCheckboxes(objectives) {
        return objectives.map((objective, index) => 
            <FormControlLabel
            label={objective.name}
            control={
                <Checkbox 
                checked={!this.props.disabledObjectives[objective.resetType.name].includes(objective.name)}
                onChange={this.handleChangeVisibleObjectives(objective)}
                value={objective}/>
            }
            key={index}/>
        )
    }

    handleChangeVisibleObjectives = objective => event => {
        this.props.toggleObjectiveDisabled(objective.name, objective.resetType)
    }

    handleChangeServer = event => {
        this.props.setServer(event.target.value);
    }
}

const mapStateToProps = (state) => {
    return {
        disabledObjectives: state.disabledObjectives,
        server: state.server.server
    }
}

const mapDispatchToProps = {
    toggleObjectiveDisabled,
    setServer
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SettingsDialog))
