'use strict'
import React from 'react'
import Title from './title'

// var React = require('react')

const App = React.createClass({
    render: function() {
        return <div>
            <Title name='Bruce Wayne' />
        </div>
    }
})

// module.exports = Title
export default App