let array = [4, 6, 8] 

let novo = array.map(numero=> numero*numero).filter(numero=> numero >50).reduce((contador,numero)=> contador + numero)

console.log(novo)