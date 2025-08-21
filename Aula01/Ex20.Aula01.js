let array = ['A','AB','ABC']
let novoarray = array.reduce(function(acumulador,palavra){
    if( palavra.length > acumulador.length){
        return palavra
    }else{
        return acumulador
    }
})

console.log(novoarray)