import './App.css'
import JogoVinteUm from './JogoVinteUm.jsx'
import {verso,listaCartas} from './assets/Deck.js'

function App() {

  return (
    <>
       <JogoVinteUm tentativas={4} verso={verso} listaCartas={listaCartas}/> 
    </>
  )
}

export default App
