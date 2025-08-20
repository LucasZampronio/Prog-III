let array = [[1, 2], [3, 4, 5], [10]]
let arraynovo = array.map(function(item){
    soma = 0
    item.forEach(element => {
        console.log(element)
        soma += element
    });
    return soma
})

console.log(arraynovo)