import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { toggleObjectiveDisabled } from '../actions/disabledObjectivesActions'
import {setServer} from "../actions/serverActions";

import { 
    Dialog, 
    DialogTitle,
    DialogContent,
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
    fullWidth: {
        width: '100%'
    }
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
        const {classes} = this.props;
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
                    <Box
                        my={1}>
                        <Typography
                            variant="h5">
                            Server
                        </Typography>
                    </Box>

                    <FormControl className={classes.fullWidth}>
                        <RadioGroup
                            value={this.props.server}
                            onChange={this.handleChangeServer}>
                            <Grid
                                container
                                justify={'space-evenly'}>
                                {this.renderServerRadioButtons(servers)}
                            </Grid>
                        </RadioGroup>
                    </FormControl>

                    {/* Visible objectives */}
                    <Box
                        my={1}>
                        <Typography
                            variant="h5">
                            Visible objectives
                        </Typography>
                    </Box>

                    <Grid
                        container
                        justify={'space-evenly'}>
                        {this.renderVisibleObjectiveGrids(objectiveTypes)}
                    </Grid>
                </DialogContent>
            </Dialog>
        )
    }

    renderServerRadioButtons(servers) {
        return Object.keys(servers).map((server, index) =>
            <Grid
                item
                xs={12}
                md={1}
                lg={1}
                key={index}>
                <FormControlLabel
                    value={servers[server]}
                    control={<Radio />}
                    label={servers[server]}/>
            </Grid>
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
