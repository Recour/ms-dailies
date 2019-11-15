import React from 'react'
import moment from 'moment'
import momentdurationformat from 'moment-duration-format'
import { connect } from 'react-redux'
import { getNextResetTime } from '../data/resetTypes'

// Material UI components
import { 
    Typography,
    Paper,
    Box,
    Divider
} from '@material-ui/core'

momentdurationformat(moment)

class ResetCountdown extends React.Component {
    constructor(props) {
        super(props)

        this.renderCountdown = this.renderCountdown.bind(this)
        this.getTimeUntilReset = this.getTimeUntilReset.bind(this)
    }

    render() {
        return (
            <Paper>
                <Box 
                m={1}>
                    <Typography
                    variant="subtitle">
                        {"RESET IN"}
                    </Typography>
                    <Divider/>
                    <Typography 
                    variant="h6">
                        { this.renderCountdown() }
                    </Typography>
                </Box>
            </Paper>
        )
    }

    renderCountdown() {
        let timeUntilReset = this.getTimeUntilReset(moment(this.props.currentTime), this.props.resetType)
        return timeUntilReset.format('DD[D] HH[H] mm[M] ss[S]')
    }

    getTimeUntilReset(currentTime, resetType) {
        let nextReset = getNextResetTime(currentTime, resetType)
        let difference = nextReset.unix() - currentTime.unix()
        let duration = moment.duration(difference, 'seconds')
        return duration
    }
}

const mapStateToProps = (state) => {
    return state.time
}

export default connect(mapStateToProps)(ResetCountdown)