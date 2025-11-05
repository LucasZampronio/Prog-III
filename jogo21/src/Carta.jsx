import { useState } from "react"

function Carta({ frente, verso, valor, onVirar }) {
    const [estaVirada, setEstaVirada] = useState(false)
    const [ladoAtual, setLadoAtual] = useState(verso)

    function virarCarta() {
        if (estaVirada) {
            return
        }

        setEstaVirada(true)
        setLadoAtual(frente)
        onVirar(valor)
    }

    return <img src={ladoAtual} onClick={virarCarta} alt="" />
}

export default Carta
