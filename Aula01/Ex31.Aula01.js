let array = [8, 12, 15, 16]
let novo  = array.filter(numero => numero % 2 == 0).find(numero=> numero>10)
console.log(novo)