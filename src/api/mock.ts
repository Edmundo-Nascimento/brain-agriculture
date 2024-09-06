import MockAdapter from 'axios-mock-adapter';

import api from './axios-instance';
import { farmList } from '../common/data/farms';

// Configura o mock
const mock = new MockAdapter(api);

// Simula as requisições GET, POST, PUT e DELETE
mock.onGet('/farms').reply(200, farmList);

mock.onPost('/farms').reply(config => {
  const novoProdutor = JSON.parse(config.data);
  novoProdutor.id = farmList.length + 1;
  farmList.push(novoProdutor);
  return [201, novoProdutor];
});

mock.onPut(/\/farms\/\d+/).reply((config: any) => {
  const id = parseInt(config.url.match(/\/farms\/(\d+)/)[1]);
  const dadosAtualizados = JSON.parse(config.data);
  const index = farmList.findIndex(prod => prod.id === id);

  if (index !== -1) {
    farmList[index] = { ...farmList[index], ...dadosAtualizados };
    return [200, farmList[index]];
  } else {
    return [404, { message: 'Produtor não encontrado' }];
  }
});

mock.onDelete(/\/farms\/\d+/).reply((config: any) => {
  alert()
  const id = parseInt(config.url.match(/\/farms\/(\d+)/)[1]);
  const index = farmList.findIndex(prod => prod.id === id);

  if (index !== -1) {
    farmList.splice(index, 1);
    return [200, { message: `Produtor com id ${id} removido com sucesso.` }];
  } else {
    return [404, { message: 'Produtor não encontrado' }];
  }
});

export default mock;
