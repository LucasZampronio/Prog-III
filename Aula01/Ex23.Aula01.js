let array = ['A','AB','']
let novoarray = array.every(function(palavra){
    return palavra.length >= 1
})

console.log(novoarray)