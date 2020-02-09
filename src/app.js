'use strict'
import React from 'react'
import Title from './title'

// var React = require('react')

const App = React.createClass({
    render: function () {
        return (
            /**
             * As únicas excessões dos atributos html no react são:
             * className (React) = class (html)
             * htmlFor (React) = for (html)
             */
            <div className='container'>
                <Title name='Bruce' lastname='Wayne' />
                <label htmlFor='input'>Input </label>
                <input type='text' id='input' arial-hidden={true} />
            </div>
        )
    }
})

// module.exports = Title
export default App