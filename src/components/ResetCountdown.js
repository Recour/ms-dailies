import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { getNextResetTime } from '../data/resetTimes'

// Material UI components
import { 
    Typography,
    Paper,
    Box
} from '@material-ui/core'

class ResetCountdown extends React.Component {
    constructor(props) {
        super(props)

        this.renderCountdown = this.renderCountdown.bind(this)
        this.getTimeUntilReset = this.getTimeUntilReset.bind(this)
    }

    render() {
        return (
            <Paper>
                <Box m={1}>
                <Typography variant="h5">
                    { this.renderCountdown() }
                </Typography>
                </Box>
            </Paper>
        )
    }

    renderCountdown() {
        let currentTime = moment(this.props.currentTime)
        console.log(currentTime)
        let timeUntilReset = this.getTimeUntilReset(currentTime)
        return timeUntilReset.format('DD:HH:mm:ss')
    }

    getTimeUntilReset(currentTime) {
        let nextReset = getNextResetTime(currentTime, this.props.resetType)
        let difference = nextReset.unix() - currentTime.unix()
        let duration = moment.duration(difference, 'seconds')
        return duration
    }
}

const mapStateToProps = (state) => {
    return state.time
}

export default connect(mapStateToProps)(ResetCountdown)