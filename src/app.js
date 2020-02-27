'use strict'
import React, { Component } from 'react'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {

    constructor() {
        super()
        this.state = {
            color: 'grey'
        }
    }
    
    render() {
        return (
            <div>
                <Square color={this.state.color} />

                {['red', 'green', 'yellow', 'blue', 'black'].map((color) => (
                    <Button
                    key={color}
                    handleClick={() => this.setState({color})}>
                        {color}
                    </Button>
                ))}
            </div>
        )
    }
}

export default App