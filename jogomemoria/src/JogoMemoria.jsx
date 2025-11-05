import { useState } from "react";
import Carta from "./Carta.jsx";

function JogoMemoria({ cartas }) {


  const [estadoCartas, setEstadoCartas] = useState(() =>
      cartas.map((valor, indice) => ({
        id: indice,
        valor,
        virada: false,
      }))
  );

  function virarCarta(id) {
    setEstadoCartas((anteriores) =>
      anteriores.map((carta) =>
        carta.id === id ? { ...carta, virada: true } : carta
      )
    );
  }

  return (
    <div>
      {estadoCartas.map((carta) => (
        <Carta
          key={carta.id}
          valor={carta.valor}
          virada={carta.virada}
          onVirar={() => virarCarta(carta.id)}
        />
      ))}
    </div>
  );
}

export default JogoMemoria;