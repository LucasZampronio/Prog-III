import './App.css'
import Questionario from './Questionario';
import listaPerguntas from './listaPerguntas';

function App() {
  return (
    <>
      {/* <MeuComponente /> */}
      <Questionario  listaPerguntas={listaPerguntas} onFinalizou={(QuestionarioRespondido)=>(console.log(QuestionarioRespondido))}/>
    </>
  )
}

export default App
