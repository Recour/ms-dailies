import React from 'react'
import moment from 'moment'
import momentdurationformat from 'moment-duration-format'
import { connect } from 'react-redux'
import { getNextResetTime } from '../data/resetTypes'
import { withStyles } from '@material-ui/core/styles'

// Material UI components
import { 
    Typography
} from '@material-ui/core'

momentdurationformat(moment)

const styles = {
    
}

class ResetCountdown extends React.Component {
    constructor(props) {
        super(props)

        this.getCountdown = this.getCountdown.bind(this)
        this.getTimeUntilReset = this.getTimeUntilReset.bind(this)
    }

    render() {
        return (
            <Typography
            variant="subtitle1">
                {"RESET IN " + this.getCountdown()}
            </Typography>
        )
    }

    getCountdown() {
        let timeUntilReset = this.getTimeUntilReset(moment(this.props.time.currentTime), this.props.resetType)
        return timeUntilReset.format('DD[D] HH[H] mm[M] ss[S]')
    }

    getTimeUntilReset(currentTime, resetType) {
        let timezone = this.props.server.server;

        let nextReset = getNextResetTime(currentTime, resetType, timezone)
        let difference = nextReset.unix() - currentTime.unix()
        let duration = moment.duration(difference, 'seconds')
        return duration
    }
}

const mapStateToProps = (state) => {
    return {
        time: state.time,
        server: state.server
    }
}

export default withStyles(styles)(connect(mapStateToProps)(ResetCountdown))
