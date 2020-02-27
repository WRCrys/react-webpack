'use strict'
import React, { Component } from 'react'
// import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'
import SearchButton from './search-button'

// var React = require('react')
/**
 * Componente Stateful: é aquele componente que manipula estado
 * Exemplo: o App.js
 * Componente Stateless: é aquele componente que não manipula estado; funções puras não tem como manipular estado.
 * Exemplo: o button.js e square.js
 */
class App extends Component {

    constructor() {
        super()
        this.state = {
            color: 'grey'
        }
    }

    // constructor (){
    //     /**
    //      * Estado inicial onde definimos na aplicação
    //      */
    //     super()
    //     this.state = {
    //         text: 'Bruce'
    //     }
    // }
    render() {
        return (
            /**
             * Exemplo de uso de Stateful
             */
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
            // <div className='container' onClick={() => this.setState({
            //     text: 'Eu queria estar dormindo mas eu não consigo'
            // })}>
            //     {this.state.text}
            // </div>

            // <div className='container'>
            //     <LikeButton />
            //     <SearchButton />
            // </div>
            // <div className='container' onClick={(e) => {
            //     alert('clicou')
            // }}>
            //     {/* <Title name='Bruce' lastname={{ first: 'Way', last: 'ne' }} /> */}
            //     {/**
            //      * Função do map(): retornar um array e esse array eu posso usar como elemento
            //      * !!! Para que o react saiba qual é o nosso elemento do array usamos o atributo key=
            //      * pois assim o React consegue ter um rastreio do nosso componente e da mas performance
            //      * 
            //      * PROBLEMA AO DUPLICAR A KEY:
            //      * quando duplicamos o react entende somente o primeiro componente assim não renderizando
            //      * o próximo igual, para resolvermos isso nos acrescentamos o index no .map() e passamos
            //      * o index como key, pois a key não será mais o nome do elemento e sim o index dele dentro do
            //      * array.
            //      */}
            //     {/* {['blue', 'red', 'blue'].map((square, index) => (
            //         <Square key={index} color={square} />
            //     ))} */}
            //     <Square />

            // </div>
        )
    }
}


// const App = React.createClass({
//     render: function () {
//         return (
//             /**
//              * As únicas excessões dos atributos html no react são:
//              * className (React) = class (html)
//              * htmlFor (React) = for (html)
//              */
//             <div className='container'>
//                 {/* Para conseguirmos passar valores sem ser string, pois o JSX espera uma string
//                 coloca-se as chaves simbolizando uma expressão e dentro passamos o valor que precisamos
//                 como mostra o atributo 'lastname' */}
//                 {/* <Title name='Bruce' lastname={Number(9457)} /> */}
//                 {/* <Title name='Bruce' lastname={[1,2,3,4,5,6]} /> */}
//                 <Title name='Bruce' lastname={{ first: 'Way', last: 'ne' }} />
//                 <label htmlFor='input'>Input </label>
//                 <input type='text' id='input' arial-hidden={true} />
//             </div>
//         )
//     }
// })

// module.exports = Title
export default App