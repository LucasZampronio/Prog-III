import { use, useEffect, useState } from "react"
import axios from "axios";



const API="http://localhost:3000"

function Logs() {
    const [Logs,SetLogs] = useState(null);


    async function ResetarLogs() {
        console.log("Aqui");
        let retorno = await axios.get(`${API}/tickets`);
        let Logs = retorno.data; 
        console.log(Logs);
        SetLogs(Logs);
    }

    useEffect(()=>{
        ResetarLogs();
    },[]);




  return (
    <>
    <div>
      <h1>Teste</h1>
    </div>
    </>
  )
}

export default Logs
