let array = [-4, 3, 8, -2]
let novo = array.find(function(comeca){
    return comeca % 2 == 0 && comeca > 0
})

console.log(novo)