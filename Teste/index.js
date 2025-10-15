import CrudAPI from '../Teste/CrudAPI.js';
import { input, select } from '@inquirer/prompts';

async function listarTodos() {
  const registros = await CrudAPI.lerTodos();
  registros.forEach((item) => {
    console.log(`ID: ${item.id} - Nome: ${item.nome} - Email: ${item.email}`);
  });
}

async function cadastrar() {
  const nome = await input({ message: 'Nome' });
  const email = await input({ message: 'Email' });
  const novoRegistro = { nome, email };
  await CrudAPI.criar(novoRegistro);
}

async function lerPorId() {
  const id = parseInt(await input({ message: 'ID do registro' }));
  const registro = await CrudAPI.lerPorId(id);
  if (registro) {
    console.log(`ID: ${registro.id} - Nome: ${registro.nome} - Email: ${registro.email}`);
  } else {
    console.log('Registro não encontrado.');
  }
}

// loop principal direto
let opcao = '';
while (opcao !== 'Sair') {
  opcao = await select({
    message: 'Opção',
    choices: [
      { name: 'Cadastrar', value: 'Cadastrar' },
      { name: 'Listar', value: 'Listar' },
      { name: 'Buscar por ID', value: 'Buscar' },
      { name: 'Sair', value: 'Sair' },
    ],
  });

  switch (opcao) {
    case 'Listar':
      await listarTodos();
      break;
    case 'Cadastrar':
      await cadastrar();
      break;
    case 'Buscar':
      await lerPorId();
      break;
    case 'Sair':
      console.log('Saindo...');
      break;
  }
}
