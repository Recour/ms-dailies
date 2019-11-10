import React from 'react'
import moment from 'moment'
import momentdurationformat from 'moment-duration-format'
import { connect } from 'react-redux';
import { 
    Divider,
    Typography,
    Paper
} from '@material-ui/core'

class ResetTimer extends React.Component {
    constructor(props) {
        super(props)

        this.renderCountdown = this.renderCountdown.bind(this)
        this.minutesUntilReset = this.minutesUntilReset.bind(this)
    }

    render() {
        return (
            <Paper>
                <Typography variant="body1">
                    RESET IN
                </Typography>
                <Divider/>
                <Typography variant="h5">
                    { this.renderCountdown() }
                </Typography>
            </Paper>
        )
    }

    renderCountdown() {
        let currentTime = moment(this.props.currentTime)
        let timeUntilReset = this.minutesUntilReset(currentTime)
        return timeUntilReset.format('DD:HH:mm:ss')
        
    }

    minutesUntilReset(currentTime) {
        let difference = this.props.resetTime.unix() - currentTime.unix()
        let duration = moment.duration(difference, 'seconds')
        return duration
    }
}

const mapStateToProps = (state) => {
    return state.time
}

export default connect(mapStateToProps)(ResetTimer)