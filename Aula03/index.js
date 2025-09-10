import {produtos as prod} from './base.js';

console.log(prod)

let nomes = prod.map((item) => item.nome);


console.log(nomes);

let produt = prod.filter((item) => item.preco > 3)
console.log(produt);