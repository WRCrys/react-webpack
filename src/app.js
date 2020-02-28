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
                { this.state.showTimer && <Timer /> }
                <button onClick={() => {
                    this.setState({ showTimer: !this.state.showTimer })
                }}>
                    Show / Hide Timer
                    </button>
            </div>
        )
    }
}

export default App