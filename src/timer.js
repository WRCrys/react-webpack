'use strict'

import React, { Component } from 'react'

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time: 0
        }

        this.timerInterval
    }

    //Usando o lifecycle
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps timer', this.props, nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log('shouldComponentUpdate timer', this.props, nextProps)
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate timer', this.props, nextProps)
    }

    componentDidMount() {
        this.timerInterval = setInterval(
            () => {
                this.setState({ time: this.state.time + 1 })
            }, 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval)
    }

    render() {
        return (
            <div>
                Timer: {this.state.time}
            </div>
        )
    }
}

export default Timer