let array = [{preco: 5, quantidade: 2}, {preco: 10, quantidade: 3}]
let arraynovo = array.map(function(item){
    return item.preco * item.quantidade
})

console.log(arraynovo)