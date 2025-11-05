import { useState } from "react"
import Carta from "./Carta"
function JogoVinteUm({ tentativas: limiteTentativas, listaCartas, verso }) {


    const [tentativas, setTentativas] = useState(limiteTentativas)
    const [pontos, setPontos] = useState(0)
    const [rodada, setRodada] = useState(0)



    function atualizarPontos(valor) {
        if (tentativas <= 0) {
            return
        }

        let total = pontos + valor
        let tentativasRestantes = tentativas - 1
        setPontos(total)
        setTentativas(tentativasRestantes)
        if (total > 21) {
            encerrarRodada(`Você perdeu! Pontos: ${total}`)
        } else if (total === 21) {
            encerrarRodada(`Você ganhou! Pontos: ${total}`)
        } else if (tentativasRestantes <= 0) {
            encerrarRodada(`Suas tentativas acabaram! Pontos: ${total}`)
        }
    }


    function encerrarRodada(mensagem) {
        alert(mensagem)
        setPontos(0)
        setTentativas(limiteTentativas)
        setRodada((numero) => numero + 1)
    }


    return (
        <div>
            <h1>Jogo do 21 - alcance 21 pontos!</h1>
            <p>Pontos: {pontos}</p>
            <p>Tentativas: {tentativas}</p>
            {listaCartas.map((carta, indice) => (
                <Carta
                    key={`${indice}-${rodada}`}
                    frente={carta.img}
                    verso={verso}
                    valor={carta.valor}
                    onVirar={atualizarPontos}
                />
            ))}
        </div>
    )
}
export default JogoVinteUm