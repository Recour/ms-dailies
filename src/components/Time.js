import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux';
import { setCurrentTime } from '../actions/timeActions';

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
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Time)