import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digite o valor da Letra A: ', (a) => {
    rl.question('Digite o valor da Letra B: ', (b) => {
        rl.question('Digite o valor da Letra C: ', (c) => {
            let resposta = parseFloat(a)+parseFloat(b)
            console.log(`Essa é a soma dos valores: ${resposta}`)
            if(resposta>c){
                console.log('A soma de A + B é maior que C')
            } else {
                console.log('A soma de A + B é menor que C')
            }
        })
    })
})s