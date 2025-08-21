let array = [{id: 1}, {id: 2},{teste:2}]
let novoarray = array.every(function(palavra){
    return palavra.id
})

console.log(novoarray)