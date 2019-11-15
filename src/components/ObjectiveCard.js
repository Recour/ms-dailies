import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { toggleObjective } from '../actions/objectivesActions'

// Material UI imports
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Box
} from '@material-ui/core';

const styles = {
    completed: {
        backgroundColor: 'rgb(170,194,96)'
    },
    uncompleted: {
        backgroundColor: "rgb(255,255,255)"
    }
}

class ObjectiveCard extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const { classes } = this.props
        return(
            <Box 
            boxShadow={3}>
                <Card 
                className={this.props.completed ? classes.completed : classes.uncompleted}>
                    <CardActionArea
                    onClick={ this.handleClick }>
                        <CardMedia>
                            <img 
                            src={ this.props.objective.image }
                            height="190px"/>
                        </CardMedia>

                        <CardContent>
                            <Typography 
                            variant="h5" 
                            noWrap>
                                { this.props.objective.name }
                            </Typography>

                            <Typography 
                            variant="body2" 
                            noWrap>
                                { this.props.objective.subtext }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        );
    }

    handleClick() {
        this.props.toggleObjective(this.props.objective.name, this.props.objective.resetType);
    }
}

const mapStateToProps = (state, ownProps) => {
    return state.objectives[ownProps.objective.resetType.name][ownProps.objective.name]
}

const mapDispatchToProps = {
    toggleObjective
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ObjectiveCard))