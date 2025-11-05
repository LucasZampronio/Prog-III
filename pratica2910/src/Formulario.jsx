import { useState } from 'react';
export default function Formularo(){
    const [contatos,setContatos] = useState([]);
    const [maxid,setMaxid] = useState(1);

    function excluir(id){
        let novoscontatos = contatos.filter(contato=> contato.id !== id);
        setContatos(novoscontatos);
    }

    function enviar(evento){
        evento.preventDefault();
        const formData = new FormData(evento.target);
        const nome = formData.get('nome');
        const email = formData.get('email');
        const notificar = formData.get('notificar');
        alert(nome + ' ' + email + 'Notificar : ' + notificar);
        let novocontato = {id:maxid,nome:nome,email:email,notificar:notificar};
        let novoscontatos = [...contatos,novocontato];
        setContatos(novoscontatos);
        setMaxid(maxid+1);
    }
    return<>
    <form action="" onSubmit={enviar}>
        <label>Nome:<input type="nome" name="nome" required /></label>
        <br />
        <label>Email:<input type="email" name="email" required /></label>
        <br />
        <label>Sim<input value="sim" type="radio" name="notificar" /></label>
        <label>Não<input value="nao" type="radio" name="notificar" /></label>
        <br />
        <button type="submit">Enviar</button> 

    </form>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>nomex</th>
                <th>email</th>
                <th>notificar</th>
                <th>ação</th>
            </tr>
        </thead>
        <tbody>
            {contatos.map(contato=>
            <tr key={contato.id}>
                <td>{contato.id}</td>
                <td>{contato.nome}</td>
                <td>{contato.email}</td>
                <td>{contato.notificar}</td>
                <td><button onClick={()=>excluir(contato.id)}>Excluir</button></td>
            </tr>)}
        </tbody>

    </table>
    </>
}