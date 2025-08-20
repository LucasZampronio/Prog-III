let array = [1,2,3]
let novoarray = array.reduce(function(acumulador,numero){
    return acumulador + numero
})

console.log(novoarray)