import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número', (numero) => {
    if(numero> 0){
        console.log('O número é positivo')
    } else {
        console.log('O número é negativo')
    }

    if(numero % 2 == 0){
        console.log('O número é par')
    } else {
        console.log('O número é impar')
    }
})
