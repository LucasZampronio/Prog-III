import { useState } from "react"
import Teclado from "./Teclado.jsx" 
import Forca from "./Forca.jsx";

function JogoDaForca({ palavra, tentativas: limiteTentativas }) {
  const palavraInicial = palavra.split('').map((letra, indice) => ({
    id: indice + 1,
    verso: "-",
    letra: letra
  }));

  const [letras, setLetras] = useState(palavraInicial);
  const [tentativas, setTentativas] = useState(limiteTentativas);
  const [jogoAcabou, setJogoAcabou] = useState(false);
  const [ganhou, setGanhou] = useState(false);

  function verificarFimDeJogo(letrasAtuais, tentativasAtuais) {
    const venceu = letrasAtuais.every((item) => item.verso === item.letra);
    if (venceu && tentativasAtuais > 0) {
      setJogoAcabou(true);
      setGanhou(true);
    } else if (tentativasAtuais <= 0) {
      setJogoAcabou(true);
      setGanhou(false);
    }
  }

  function ReceberLetra(letraTeclado) {
    const letra = letraTeclado.toLowerCase();
    const existeLetra = palavra.toLowerCase().includes(letra);

    if (existeLetra) {
      const novasLetras = letras.map((item) =>
        item.letra.toLowerCase() === letra ? { ...item, verso: item.letra } : item
      );

      setLetras(novasLetras);
      verificarFimDeJogo(novasLetras, tentativas);

    } else {
      const novasTentativas = tentativas - 1;
      setTentativas(novasTentativas);
      verificarFimDeJogo(letras, novasTentativas);
    }
  }

  return (
    <div>
      <h1>Jogo da Forca</h1>
      <p>Tentativas restantes: {tentativas}</p>
      <Forca listaLetra={letras} />
      {jogoAcabou ? (
        ganhou ? <p>Você ganhou!</p> : <p>Você perdeu!</p>
      ) : (
        <Teclado onEnviarLetra={ReceberLetra} />
      )}
    </div>
  );
}

export default JogoDaForca;
