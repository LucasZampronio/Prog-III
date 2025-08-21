let array = [-2, 3, 4]

let encadeamento = array.filter(numero => numero > 0).map(numero => numero * numero).reduce((contador,numero) => contador + numero)

console.log(encadeamento)