import { useEffect, useState } from "react"
import axios from "axios";
const API="http://localhost:3000"
export default function Contatos(props){
    const [contatos, setContatos] = useState(null);
    const [cadastrando, setCadastrando] = useState(false);
    const [contatoEditar,setcontatoEditar] = useState(null);



    async function carregarDados(){
        console.log("Aqui");
        let retorno = await axios.get(`${API}/contatos`);
        let contatosServidor = retorno.data; 
        console.log(contatosServidor);
        setContatos(contatosServidor);
    }

    async function cadastrarContato(form){
          console.log(form);
        let nome = form.get("nome");
        let email = form.get("email");
        const novoContato = {
            nome:nome,
            email:email
        };
        if(contatoEditar){
            await axios.put(`${API}/contatos/${contatoEditar.id}`,novoContato);
            setcontatoEditar(null);
        }else{
            await axios.post(`${API}/contatos`, novoContato);
        }
        carregarDados();
        setCadastrando(false);
    }

    async function editarContato(id){
        setCadastrando(false);
        let retorno = await axios.get(`${API}/contatos/${id}`);
        let novoContatoEditar = retorno.data;
        setcontatoEditar(novoContatoEditar);
        setCadastrando(true);



    }


    async function excluirContato(id){
        if(confirm("Tem certeza que deseja excluir ?")){
            const retorno = await axios.delete(`${API}/contatos/${id}`);
            carregarDados();
        }
    }
    
    useEffect(()=>{
        carregarDados();
    },[]);

    if(contatos===null) {
        return "Carregando...";
    }
    return <>
        <h1>Contatos</h1>
        <button onClick={()=> setCadastrando(true)}>Cadastrar novo contato</button>
        {cadastrando?<dialog open={cadastrando}>
            <h2>{contatoEditar ? "Editar" : "Cadastrar"}</h2>
            <form action={(form)=> cadastrarContato(form)}>
            <label>Nome <input required name="nome" defaultValue={contatoEditar?.nome} placeholder="Digite o nome"/></label>
            <br />
            <label>E-mail <input required name="email"defaultValue={contatoEditar?.email}  placeholder="Digite o e-mail"/></label>
            <br />
            <button type="submit">Enviar</button>   
            <br />
            <button type= "button" onClick={()=>{
                setCadastrando(false)
                setcontatoEditar(null)
            }}>
                Fechar</button>
            </form>
        </dialog>:""}
        <br />
        <br />
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
                    <td><button onClick={()=>editarContato(contato.id)}>Editar</button>
                        <button onClick={()=>excluirContato(contato.id)} >Excluir</button>
                    </td>
                </tr> )}
            </tbody>
            </table>
    </>
} 