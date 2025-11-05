import React, { use, useEffect, useState} from 'react'

function Carta(props) {

    const[imagem] = useState(props.img);
    const[verso] = useState(props.verso);
    const[valor] = useState(props.valor);
    const[tavirada,setTavirada] = useState(false);
    const[ladoAtual,setLadoAtual] = useState(props.verso);

    
    useEffect(() => {
        resetarCarta();
      }, [props.resetarJogo]);

    function resetarCarta(){
        if(props.resetarJogo){
            setTavirada (false);
            setLadoAtual(verso);
        }
    }


    function virarCarta() {
        if(tavirada){
            return;
        }
        setTavirada(true);
        setLadoAtual(imagem);
        props.onVirar(valor)

        
    }

  return (
    <>
        <img src={ladoAtual} onClick={virarCarta} alt="" />
    </>
  )
}

export default Carta
