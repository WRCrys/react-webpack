'use strict'
import React, { Component } from 'react'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'
import SearchButton from './search-button'
import Timer from './timer'

class App extends Component {

    constructor() {
        console.log('constructor app')
        super()
        this.state = {
            time: 0,
            showTimer: true
        }
    }

    componentWillMount() {
        console.log('componentWillMount app')
    }

    componentDidMount() {
        console.log('componentDidMount app')
    }

    render() {
        console.log('render app')
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