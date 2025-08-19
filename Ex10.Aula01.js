let array = [{nome: "apple", preco: 2}, {nome: "banana", preco: 3}]
let arrayfiltrado = array.map(function(item){
    return item.preco
})

console.log(arrayfiltrado)