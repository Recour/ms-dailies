import React from 'react'
import { connect } from 'react-redux'
import { toggleDaily } from '../actions/dailiesActions'

// Material UI imports
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core';

// Own components
import ResetCountdown from './ResetCountdown'

class BossCard extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return(
            <Card style={ this.props.completed ? { backgroundColor: "lightgreen" } : { backgroundColor: "white" } }>
                <CardActionArea
                onClick={ this.handleClick }>
                    <CardContent>
                        <ResetCountdown resetType={this.props.boss.resetType}/>
                    </CardContent>

                    <CardMedia
                        component="img"
                        height="210"
                        image={ this.props.boss.image }/>

                    <CardContent>
                        <Typography variant="h5" noWrap>
                            { this.props.boss.name }
                        </Typography>

                        <Typography variant="body2" noWrap>
                            { this.props.boss.difficulty }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

    handleClick() {
        this.props.toggleDaily(this.props.boss.name);
    }
}

const mapStateToProps = (state, ownProps) => {
    return state.dailies[ownProps.boss.name]
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDaily: (daily) => {
            dispatch(toggleDaily(daily))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BossCard)