let array = [5, -3, 10]
let novoarray = array.every(function(numero){
    return numero % 2 == 0
})

console.log(novoarray)