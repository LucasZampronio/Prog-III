function Forca({ listaLetra }) {
  return (
    <div>
      {listaLetra.map((item) => (
        <button key={item.id}>
          {item.verso}
        </button>
      ))} 
    </div>
  );
}

export default Forca;