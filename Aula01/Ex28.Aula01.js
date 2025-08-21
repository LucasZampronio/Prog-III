let array =  [{id: 1}, {id: 2}]
let novo =  array.find(function(comeca){
    return comeca.id == 2
})

console.log(novo)