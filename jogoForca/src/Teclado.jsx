function Teclado({onEnviarLetra}) {
  const letraAlfabetos = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


  function clicarLetra(letraClicada){

    onEnviarLetra(letraClicada);
  }


  

  return (
    <>
      <div>
        {letraAlfabetos.map((letra)=>(
          <button onClick={()=>clicarLetra(letra)} key={letra}>{letra}</button>
        ))}
      </div>
    </>
  )
}

export default Teclado
