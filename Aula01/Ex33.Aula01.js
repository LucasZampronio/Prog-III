let array = [{nome: "A", ativo: true}, {nome: "B", ativo: true}]

let novo = array.filter(objeto => objeto.ativo).map(pegarnome=> pegarnome.nome).reduce((concatenar,nome)=> concatenar + nome)
console.log(novo)