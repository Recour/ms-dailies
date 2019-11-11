import React from 'react'
import moment from 'moment'
import momentdurationformat from 'moment-duration-format'
import { connect } from 'react-redux'
import { 
    setCurrentTime,
    setLastVisit 
} from '../actions/timeActions'

class Time extends React.Component {
    constructor(props) {
        super(props)

        this.setCurrentTime = this.setCurrentTime.bind(this)
    }

    render() {
        return null
    }

    componentDidMount() {
        this.setCurrentTime()

        // Set lastVisit before closing
        window.addEventListener('beforeunload', this.props.setLastVisit(new moment.utc()))
    }

    setCurrentTime() {
        this.props.setCurrentTime(new moment.utc())

        setTimeout(this.setCurrentTime, 1000)
    }
}

const mapStateToProps = (state) => {
    return state.time
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentTime: (time) => {
            dispatch(setCurrentTime(time))
        },
        setLastVisit: (time) => {
            dispatch(setLastVisit(time))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Time)