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
                {/* Para conseguirmos passar valores sem ser string, pois o JSX espera uma string
                coloca-se as chaves simbolizando uma expressão e dentro passamos o valor que precisamos
                como mostra o atributo 'lastname' */}
                {/* <Title name='Bruce' lastname={Number(9457)} /> */}
                {/* <Title name='Bruce' lastname={[1,2,3,4,5,6]} /> */}
                <Title name='Bruce' lastname={{ first: 'Way', last: 'ne' }} />
                <label htmlFor='input'>Input </label>
                <input type='text' id='input' arial-hidden={true} />
            </div>
        )
    }
})

// module.exports = Title
export default App