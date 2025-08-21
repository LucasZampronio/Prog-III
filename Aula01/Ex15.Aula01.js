let array = ["Pão", "Leite"]

let arraynovo = array.map(function(item){
    return `<li>${item}<li>`
})

console.log(arraynovo)