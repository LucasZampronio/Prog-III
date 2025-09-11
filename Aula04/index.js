import { input } from '@inquirer/prompts';
async function lerDados(){ 
    const answer =  await input({ message: 'Enter your name' });
    const idade =  await input({ message: 'Enter your age' });
    const email =  await input({ message: 'Enter your email' });
    const pessoa = { name: answer, age: idade, email: email };
    return pessoa}

    const pessoa =  await lerDados();
    console.log(pessoa);