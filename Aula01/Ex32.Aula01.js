let array = ["a", "abcd", "xyz"]
let novo = array.map(tamanho=> tamanho.length).filter(tamanho=> tamanho>3).every(tamanho=>tamanho %2 ==0)
console.log(novo)