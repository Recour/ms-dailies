import React from 'react'
import { withStyles } from '@material-ui/core/styles';

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
    }

    render() {
        const { classes } = this.props
        return(
            <Card
            className={this.props.isCompleted ? classes.completed : classes.uncompleted}>
                <CardActionArea
                onClick={ this.handleClick }>
                    <CardMedia>
                        <img 
                        src={this.props.objective.image}
                        alt={this.props.objective.name}
                        height="100%"
                        width="100%"/>
                    </CardMedia>

                    <CardContent>
                        <Typography 
                        variant="h6" 
                        noWrap>
                            {this.props.objective.name}
                        </Typography>

                        <Typography 
                        variant="body2" 
                        noWrap>
                            {this.props.objective.subtext}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

    handleClick() {
        this.props.toggleObjectiveCompleted(this.props.objective.name, this.props.objective.resetType);
    }
}

export default withStyles(styles)(ObjectiveCard)