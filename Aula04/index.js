import { input } from '@inquirer/prompts';

const answer = input({ message: 'Enter your name' });

function retornaQuandoDigitado(nome) { 
    const idade = input({ message: 'Enter your age' })
    function retornaIdade(idade) {
        console.log(' hello ' +  nome + ' you are ' + idade + ' years old' );
}
    idade.then(retornaIdade)
 }


answer.then(retornaQuandoDigitado)