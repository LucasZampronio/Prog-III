import { openAsBlob } from 'fs';
import CrudAPI from '../Teste/CrudAPI.js';
import { input, select } from '@inquirer/prompts';

async function listarTodos() {
    const registros = await CrudAPI.lerTodos();
    const novoregistro = registros.map((item) => console.log(`ID: ${item.id} - Nome: ${item.nome} - Email: ${item.email}`));
}

let opcao = '';
while (opcao !== 'Sair') {
    opcao = await select({
    message: 'Opção',
    choices: [
    {
      name: 'Cadastrar',
      value: 'Cadastrar',
    },
    {
      name: 'Listar',
      value: 'Listar',
    },
    {
      name: 'Sair',
      value: 'Sair',
    },
  ],
});
    switch (opcao) {
        case 'Listar':
            await listarTodos()
        break
    }
};
