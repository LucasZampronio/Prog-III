let array = ["2023-10-05", "2024-01-01"]
let arraynovo = array.map(function(data){
    let nova = data.split('-')
    return `${nova[2]}/${nova[1]}/${nova[0]}`
}) 

console.log(arraynovo)