let array =  ["Apple",'appleteste', "banana", "Orange",'testebanana']
let novo =  array.find(function(comeca){
    return comeca.includes('a')
})

console.log(novo)