let array = [2,3,4]
let novoarray = array.reduce(function(acumulador,numero){
    return acumulador + (numero* 2) 
})

console.log(novoarray)