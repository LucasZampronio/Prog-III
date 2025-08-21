let array = ['a','ab','abc','abcd']
let array3letras = array.filter(function(teste){
    if(teste.length > 3){
        return true
    }
})

console.log(array3letras)