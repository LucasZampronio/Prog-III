let array = [true,true,false]
let arraynovo = array.map(function(item){
    if(item === true){
        return 1
    } else{
        return 0
    }
})

console.log(arraynovo)