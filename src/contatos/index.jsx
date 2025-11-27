import { useEffect, useState } from "react"
import axios from "axios";
export default function Contatos(props){
    const [contatos, setContatos] = useState(null);
    async function carregarDados(){
        console.log("Aqui");
        let retorno = await axios.get("http://localhost:3000/contatos/");
        let contatosServidor = retorno.data; 
        console.log(contatosServidor);
        setContatos(contatosServidor);
    }
    
    useEffect(()=>{
        carregarDados();
    },[]);

    if(contatos===null) {
        return "Carregando...";
    }
    return <>Contatos
        <table border={1}><thead>
            <tr>
                <th>id</th>
                <th>Nome</th>
                <th>E-mail</th>
            </tr>
            </thead>
            <tbody>
                {contatos.map(contato=><tr key={contato.id}>
                    <td>{contato.id}</td>
                    <td>{contato.nome}</td>
                    <td>{contato.email}</td>
                </tr> )}
            </tbody>
            </table>
    </>
} 