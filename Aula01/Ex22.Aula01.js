let array = [2,4,6]
let novoarray = array.every(function(numero){
    if(numero % 2 == 0 ){
        return numero
    }
})

console.log(novoarray)