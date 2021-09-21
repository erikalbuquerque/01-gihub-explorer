import { render } from 'react-dom'
import { App } from './App'

/*
A função render pega o elemento que você quer que renderize e joga dentro
do elemento que você quer que ele seja renderizado.
No caso estamos pegando um elemento H1 e renderizando dentro da div root
no html principal.
*/ 

render(<App />, document.getElementById('root'))
