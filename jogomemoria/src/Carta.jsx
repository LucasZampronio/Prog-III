function Carta({ valor, virada, onVirar }) {
  return (
    <button type="button" onClick={onVirar}>
      {virada ? valor : '*'}
    </button>
  );
}

export default Carta;