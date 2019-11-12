import React from 'react'
import { connect } from 'react-redux'
import { toggleObjective } from '../actions/objectivesActions'

// Material UI imports
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core';

class ObjectiveCard extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return(
            <Card style={ this.props.completed ? { backgroundColor: "lightgreen" } : { backgroundColor: "white" } }>
                <CardActionArea
                onClick={ this.handleClick }>
                    <CardMedia
                        component="img"
                        height="210"
                        image={ this.props.objective.image }/>

                    <CardContent>
                        <Typography variant="h5" noWrap>
                            { this.props.objective.name }
                        </Typography>

                        <Typography variant="body2" noWrap>
                            { this.props.objective.difficulty }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(ObjectiveCard)