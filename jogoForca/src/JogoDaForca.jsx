import { useState } from "react"
import Teclado from "./Teclado.jsx" 
import Forca from "./Forca.jsx";


function JogoDaForca({palavra,tentativas:limiteTentativas}) {

  const palavraInicial = palavra.split('').map((letra, indice) => ({ id: indice+1, verso: "-", letra:letra}));
  const[letras,setLetras] = useState(palavraInicial);
  const[tentativas,setTentativas] = useState(limiteTentativas);
  const[jogoAcabou,setJogoAcabou] = useState(false);
  const[ganhou,setGanhou] = useState(false);

  function verificarFimDeJogo(){ 
    let ganhou = letras.every((item)=> item.verso === item.letra);
    if(ganhou && tentativas > 0){
      setJogoAcabou(true);
      setGanhou(true);
    }
    if(tentativas <= 0){
      setJogoAcabou(true);
      setGanhou(false)
      }
  }


  function ReceberLetra(letraTeclado){
    let letra = letraTeclado;
    let existeLetra = palavra.toLowerCase().includes(letra.toLowerCase());
    if(existeLetra){
      let letras = (anteriores) =>
        anteriores.map((item) =>
          item.letra.toLowerCase() === letra.toLowerCase()
            ? { ...item, verso: item.letra }
            : item
        )
      setLetras(letras);
      verificarFimDeJogo();
    }else{
      let novasTentativas = tentativas - 1;
      setTentativas(novasTentativas);
      verificarFimDeJogo();
    }

  }



  return (
    <>
      <div>
        <h1>Jogo da Forca</h1>
        <p>Tentativas restantes: {tentativas}</p>
        <Forca   listaLetra={letras}/>
        {jogoAcabou ? (
          ganhou ? <p>Você ganhou!</p> : <p>Você perdeu!</p>
        ) : (
          <Teclado onEnviarLetra={ReceberLetra} />
        )}
      </div>
  </>
  )
}

export default JogoDaForca