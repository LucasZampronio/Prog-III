let array = ["Hello", " ", "World"]
let novoarray = array.reduce(function(acumulador,palavra){
    return acumulador + palavra
})

console.log(novoarray)