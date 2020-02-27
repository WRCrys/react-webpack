# Anotações sobre as aulas

### [M1#A08] - Atributos do HTML

------------



 As únicas excessões dos atributos html no react são:
 className (React) = class (html)
 htmlFor (React) = for (html)
 
 ```javascript
const App = React.createClass({
	render: function () {
        return (
            <div className='container'>
                <Title name='Bruce Wayne' />
                <label htmlFor='input'>Input </label>
                <input type='text' id='input' arial-hidden={true} />
            </div>
        )
    }
})
```
<br/>

### [M1#A10] - Passando outros tipos de dados via props

------------

Para conseguirmos passar valores sem ser string, pois o JSX espera uma string
coloca-se as chaves simbolizando uma expressão e dentro passamos o valor que precisamos como mostra o atributo lastname.
```javascript
<Title name='Bruce' lastname={Number(9457)} />
```
```javascript
 <Title name='Bruce' lastname={[1,2,3,4,5,6]} />
```
<br/>

### [M1#A11] - Renderizando componentes com funções puras

------------

- Função pura
 Quando há somente o retorno na função podemos fazer como segue o exemplo abaixo;
 Não precisa usar o return com a arrow funtions
 
 - Exemplo 01:
 	Usando acrase para usar como string e cifrão com chaves para usarmos ES6 dentro da 		string	
 ```javascript
const Title = (props) => (
      <h1>Olá { props.name } + ' ' + { props.lastname} </h1>
     <h1>Olá {`${props.name} ${props.lastname.first}${props.lastname.last}`} </h1>
     )
``` 
 - Exemplo 02:
	Utilizando o short render com as propriedades do props	
	```javascript
const Title = ({ name, lastname }) => (
<h1>Olá {`${name} ${lastname.first}${lastname.last}`} </h1>
)    
Title.defaultProps = {
name: 'Desconhecido',
lastname: 'Sem sobrenome'
}
```
<br/>

### [M1#A13] - Conhecendo a prop key

------------
- Função do map(): retornar um array e esse array eu posso usar como elemento!!! Para que o react saiba qual é o nosso elemento do array usamos o atributo "key="
pois assim o React consegue ter um rastreio do nosso componente e da mas performance

`app.js`
```javascript
class App extends Component {
    render() {
        return (
            <div className='container'>
			 {['blue', 'red'].map((square) => (
                    <Square key={square} color={square} />
                ))}
            </div>
        )
    }
```

- No React o style é tratado como um objeto
- Podemos usar o alto fechamento quando a nossa div não terá nenhum conteúdo

`square.js`
```javascript
'use strict'
import React from 'react'

const Square = ({ color }) => (
     <div style={{
        backgroundColor: color,
        height: '100px',
        width: '100px'
     }} />
)

Square.defaultProps = {
    color: 'yellow'
}

export default Square 
```

### [M1#A20] - Stateful vs Stateless

------------



- Componente Stateful: é aquele componente que manipula estado
  Exemplo: o App.js

- Componente Stateless: é aquele componente que não manipula estado; funções puras não tem como manipular estado.
  Exemplo: o button.js e square.js
  
```javascript
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
```
<br/>
Editado no [Editor.md](https://pandao.github.io/editor.md/en.html "Editor.md")