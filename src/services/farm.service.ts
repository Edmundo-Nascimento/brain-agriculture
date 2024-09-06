import api from "../api/axios-instance";
import { IFarm } from "../common/data/farms";

export const allFarms = async () => {
  try {
    const response = await api.get('/farms');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar produtores');
  }
};


export const registerFarm = async (newFarm: Partial<IFarm>) => {
  try {
    const response = await api.post('/farms', newFarm);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao cadastrar produtor');
  }
};

export const updateFarm = async (id: number, payload: Partial<IFarm>) => {
  try {
    const response = await api.put(`/farms/${id}`, payload);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar produtor');
  }
};

export const deleteFarm = async (id: number) => {
  try {
    const response = await api.delete(`/farms/${id}`);
    return response.data.message;
  } catch (error) {
    throw new Error('Erro ao deletar produtor');
  }
};
