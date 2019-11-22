import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { toggleObjectiveCompleted } from '../actions/objectivesActions'

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
        backgroundColor: 'rgb(156,182,93)'
    },
    uncompleted: {
        backgroundColor: "rgb(255,255,255)"
    }
}

class ObjectiveCard extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.isObjectiveCompleted = this.isObjectiveCompleted.bind(this)
    }

    render() {
        const { classes } = this.props
        return(
            <Box 
            boxShadow={0}>
                <Card 
                className={this.isObjectiveCompleted() ? classes.completed : classes.uncompleted}>
                    <CardActionArea
                    onClick={ this.handleClick }>
                        <CardMedia>
                            <img 
                            src={ this.props.objective.image }
                            alt={ this.props.objective.name }
                            height="100%"
                            width="100%"/>
                        </CardMedia>

                        <CardContent>
                            <Typography 
                            variant="h6" 
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
        try {
            this.props.toggleObjectiveCompleted(this.props.objective.name, this.props.objective.resetType);
        } catch(error) {
            alert(error)
        }
    }

    isObjectiveCompleted() {
        if(this.props.completedObjectives.includes(this.props.objective.name)) {
            return true
        } else {
            return false
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return state.objectives[ownProps.objective.resetType.name]
}

const mapDispatchToProps = {
    toggleObjectiveCompleted
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ObjectiveCard))