import Questao from "./Questao";
import React, { useState} from "react";

export default function Questionario(props) {
    const perguntas = props.listaPerguntas;
    const [ContadorAcertos, setContadorAcertos] = useState(0);
    const [ContadorErros, setContadorErros] = useState(0);


    function respondeu(acertou) {
        if (acertou) {
            setContadorAcertos(ContadorAcertos + 1);
        } else {
            setContadorErros(ContadorErros + 1);
        }
    }


    return <>

        {perguntas.map((objetoPergunta)=> <Questao
            pergunta={objetoPergunta.pergunta}
            resposta={objetoPergunta.resposta?'sim':'não'} 
            onResposta={()=>alert('Aqui')}/>
        )}
        <label> Não respondidas {3 - ContadorAcertos - ContadorErros}</label>
        <label > Acertos {ContadorAcertos}</label>
        <label>Erros {ContadorErros}</label>
    </>
}