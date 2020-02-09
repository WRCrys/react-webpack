'use strict'

import React from 'react'

/**
 * Arrow function
 * Função pura
 * Quando há somente o retorno na função podemos fazer como segue o exemplo abaixo
 * Não precisa usar o return com a arrow funtions
 */

//Exemplo 1
// const Title = (props) => (
//     // <h1>Olá { props.name } + ' ' + { props.lastname} </h1>
//     //Usando acrase para usar como string e cifrão com chaves para usarmos ES6 dentro da string
//     <h1>Olá {`${props.name} ${props.lastname.first}${props.lastname.last}`} </h1>
//     )

//Exemplo 2 utilizando o short render com as propriedades do props
const Title = ({ name, lastname }) => (
    // <h1>Olá { props.name } + ' ' + { props.lastname} </h1>
    //Usando acrase para usar como string e cifrão com chaves para usarmos ES6 dentro da string
    <h1>Olá {`${name} ${lastname.first}${lastname.last}`} </h1>
    )

Title.defaultProps = {
    name: 'Desconhecido',
    lastname: 'Sem sobrenome'
}

// const Title = React.createClass({
//     getDefaultProps: function () {
//         return {
//             name: 'Desconhecido',
//             lastname: 'Sem sobrenome'
//         }
//     },
//     render: function () {
//         return (
//         // <h1>Olá {this.props.name + ' ' + this.props.lastname}!</h1>
//         //Abaixo estamos tratando o objeto que foi passado no app.js
//         <h1>Olá {this.props.name + ' ' + this.props.lastname.first + this.props.lastname.last}!</h1>
//         )
//     }
// })

export default Title