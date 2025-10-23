import Tecla from "./Tecla";
import { useState } from "react";

export default function Cofre(props) {
    const senhaatual = props.senha.split('').map((valor,indice)=>({id:indice+1,valorDigitado:0,valorCorreto:Number(valor)}));
    const [tentativas,setTentativas] = useState(0);

    

    console.log(senhaatual);
    const [digitos,setDigitos] = useState(senhaatual);

    function abrir(){ 
        let errado = digitos.find(digito=> digito.valorDigitado!== digito.valorCorreto);
        if(errado){
            alert('Senha incorreta!');
            let novastentativas = tentativas;
            novastentativas++;
            setTentativas(novastentativas);
        }else{
            alert('Cofre aberto com sucesso!');
        }

     }


    function atualizaDigito(valor, id){

        let novosDigitos;
        novosDigitos = digitos.map(digito=>{
            if(digito.id == id){
                let novodigito = {...digito};
                novodigito.valorDigitado = valor;
                return novodigito;
            }else{
                return digito;
            }
        });

        setDigitos(novosDigitos);
        }



    return<> 
    Senha informada : {props.senha} 
    <br /><br />
    {digitos.map(digito=>
    <Tecla onChange={(valor)=>atualizaDigito(valor,digito.id)}/>)}
    <br />
    <button onClick={abrir}>Abrir</button>
    </>
} 