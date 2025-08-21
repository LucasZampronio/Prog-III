let array = [1,2,3]
let arrayduplicado = array.map(function(numero){
    if(numero % 2 == 0){
        return numero = numero * 2
    }else{
        return numero = numero * 3
    }
})

console.log(arrayduplicado)