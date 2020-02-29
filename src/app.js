'use strict'
import React, { Component } from 'react'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'
import SearchButton from './search-button'
import Timer from './timer'

class App extends Component {

    constructor() {
        console.log('constructor')
        super()
        this.state = {
            time: 0,
            showTimer: true
        }
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        console.log('render')
        return (
            <div>
                <Timer time={this.state.time} />
                <button onClick={() => {
                    this.setState({ time: this.state.time + 10 })
                }}>
                    Change Props
                </button>
            </div>
        )
    }
}

export default App