let array = [1,2,3]
let arraypardobrado = array.map(function(numero){
    if(numero % 2 == 0){
        return numero * 2
    } else{
        return numero
    }
})

console.log(arraypardobrado)