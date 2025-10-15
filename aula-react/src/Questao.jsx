import React, { useState } from "react";

export default function Questao({pergunta,resposta, onResposta}) {
    const [tentativas, setTentativas] = useState(0);
    const [respostas, setRespostas] = useState("Não Respondeu");

    function clicar(respostausuario) {
        if (resposta.toLowerCase() == respostausuario.toLowerCase()) {
            setRespostas("alguma coisa com acertou");
            setTentativas(tentativas + 1);
            onResposta(true)
        } else {
            setRespostas("alguma coisa com errou");
            setTentativas(tentativas + 1);
            onResposta(false)
        }
    }

    return (
        <div>
            <label>Tentativas {tentativas}</label>
            <h2>Pergunta: {pergunta}</h2>
            {respostas !='Não Respondeu' ?
            <label>Resultado:{respostas}</label> :
             <>
                <button onClick={() => clicar('Sim')}>Sim</button>
                <button onClick={() => clicar('Não')}>Não</button>
            </>}
        </div>
    );
}
