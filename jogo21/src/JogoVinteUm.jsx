import Carta from "./Carta"
import { useState } from "react"


function JogoVinteUm(props) {

    const[tentativas,setTentativas] = useState(props.tentativas);
    const[listaCartas,setListaCartas] = useState(props.listaCartas);
    const[verso,setVerso] = useState(props.verso);
    const[pontos,setPontos] = useState(0);
    const[jogoAcabou,setJogoAcabou] = useState(false);



    function atualizarPontos(valor){
    
        let novosPontos = pontos;
        novosPontos += valor;
        setPontos(novosPontos);


        let tentativasRestantes = tentativas;
        tentativasRestantes--;
        setTentativas(tentativasRestantes);

        if(novosPontos > 21){
            alert("Você perdeu! Pontos: " + novosPontos);
            setPontos(0);
            setTentativas(props.tentativas);
            setJogoAcabou(true);


        }
        
        else if(novosPontos == 21){
            alert("Você ganhou! Pontos: " + novosPontos);
            setPontos(0);
            setTentativas(props.tentativas);
            setJogoAcabou(true);

        }

    }

    return (
        <>
        <div>
            <h1>Jogo do 21, para ganhar você deve fazer 21 pontos!</h1>
            <p>Pontos:{pontos}</p>
            <p>Tentativas:{tentativas}</p>
            {listaCartas.map(carta=>
                <Carta
                    resetarJogo={jogoAcabou}
                    onVirar={(valor)=>atualizarPontos(valor)}
                    key ={carta.id}
                    verso={verso}
                    valor={carta.valor}
                    img= {carta.img}
                
                />    
            )}
        </div>

        </>
    )
}


export default JogoVinteUm
