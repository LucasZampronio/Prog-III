import Tecla from "./Tecla";
import { useState } from "react";

export default function Cofre(props) {
    const senhaatual = props.senha.split('').map((valor,indice)=>({id:indice+1,valorDigitado:0,valorCorreto:Number(valor)}));
    console.log(senhaatual);
    const [digitos,setDigitos] = useState(senhaatual);



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
    </>
} 