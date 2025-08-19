let array = [{ativo:true},{ativo:false},{ativo:true},{ativo:false}]

let arrayfiltrado = array.filter(function(verificar){
    if (verificar.ativo === true){
        return true
    }
})

console.log(arrayfiltrado)