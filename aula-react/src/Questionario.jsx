import Questao from "./Questao";
import React, { useState } from "react";

export default function Questionario(props) {
    const [perguntas, setPerguntas] = useState(structuredClone(props.listaPerguntas));
    const [ContadorAcertos, setContadorAcertos] = useState(0);
    const [ContadorErros, setContadorErros] = useState(0);




    function respondeu(acertou,id) {


        let novaPergunta = perguntas.map(perguntas=> {
        if(id==perguntas.id){
            perguntas.acertou=acertou
            return perguntas;
        }else{
            return perguntas;
        }})
        
        let novoContadorAcertos = ContadorAcertos;
        let novoContadorErros = ContadorErros;

        if (acertou) {
            novoContadorAcertos++;
            setContadorAcertos(novoContadorAcertos);
        } else {
            novoContadorErros++;
            setContadorErros(novoContadorErros);
        }
        setPerguntas(novaPergunta);

        if (novoContadorErros + novoContadorAcertos === perguntas.length) {
            props.onFinalizou(novaPergunta);
        }
    }

    return (
        <>
            {perguntas.map((objetoPergunta) => (
                <Questao
                    key={objetoPergunta.id}
                    id={objetoPergunta.id}
                    pergunta={objetoPergunta.pergunta}
                    resposta={objetoPergunta.resposta ? "sim" : "não"}
                    onResposta={(acertou) => respondeu(acertou, objetoPergunta.id)}
                />
            ))}

            <label>Não respondidas {perguntas.length - ContadorAcertos - ContadorErros}</label>
            <label> Acertos {ContadorAcertos}</label>
            <label> Erros {ContadorErros}</label>
        </>
    );
}
