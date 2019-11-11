import React from 'react'
import { connect } from 'react-redux'
import data from '../data/data'
import moment from 'moment'
import { resetDaily } from '../actions/dailiesActions'

class ResetHandler extends React.Component {
    constructor(props) {
        super(props)

        this.handleResets = this.handleResets.bind(this)
        this.handleDailyBossResets = this.handleDailyBossResets.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    render() {
        return null
    }

    componentDidMount() {
        this.handleResets()
    }

    handleResets() {
        this.handleDailyBossResets()
    }

    handleDailyBossResets() {
        data.dailies.bosses.forEach(boss => this.handleReset(boss))
    }

    handleReset(objective) {
        // Make object for the next reset time after lastVisit
        var lastVisitResetTime = moment()

        // If last visit is before objective's reset time
        if(moment(this.props.time.lastVisit).isBefore(objective.resetTime)) {
            console.log("lastVisit is before resetTime")

            // If current time is after reset time
            if(moment(this.props.time.currentTime).isAfter(objective.resetTime)) {
                console.log("currentTime is after resetTime")

                this.props.resetDaily(objective.name)
            }
        }
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetDaily: (daily) => {
            dispatch(resetDaily(daily))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetHandler)