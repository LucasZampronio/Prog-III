let array =[{estoque: 90, preco: true}, {preco: 150, estoque: false}] 
let novo = array.map(estarestoque=> estarestoque.estoque).find(maiorquecem=> maiorquecem.preco > 100)
console.log(novo)