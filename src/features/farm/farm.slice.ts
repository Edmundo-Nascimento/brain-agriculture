import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  allFarms as apiGetFarms,
  registerFarm as apiRegisterFarm,
  updateFarm as apiUpdateFarm,
  deleteFarm as apiDeleteFarm,
} from '../../services/farm.service';
import { coordsByState, gerarDadosDeCoordenadas, range } from '../../common/data/coords-state';
import { toast } from 'react-toastify';
import { IFarm } from '../../common/data/farms';

// Cria ações assíncronas usando createAsyncThunk
export const fetchFarms = createAsyncThunk('farms/fetchFarms', async () => {
  const response = await apiGetFarms();
  return response;
});

export const addFarm = createAsyncThunk('farms/addFarm', async (newFarm: Partial<IFarm>) => {
  const { agriculturalArea, city, document, farmName, farmOwn, state, totalArea, vegetationArea, plantedCrops } = newFarm

  let stateValue: any = state?.value.toLowerCase();
  let stateCoords = coordsByState[stateValue]["center"]
  const coordenadasUberaba = [stateCoords.lat, stateCoords.lng]; // Ponto central de referência
  const coordsFarm = gerarDadosDeCoordenadas(coordenadasUberaba, range);

  let data = {
    id: 15,
    dataCriacao: "2023-09-15",
    document: document,
    farmOwn: farmOwn,
    farmName: farmName,
    city: city,
    state,
    ...coordsFarm,
    plantedCrops,
    agriculturalArea,
    totalArea,
    vegetationArea
  }
  const response = await apiRegisterFarm(data);
  return response;
});

export const updateFarm = createAsyncThunk('farms/updateFarm', async ({ id, payload }: { id: number, payload: Partial<IFarm> }) => {
  console.log(id)
  console.log(payload)
  const response = await apiUpdateFarm(id, payload);
  return response;
});

export const removeFarm = createAsyncThunk('farms/removeFarm', async (id: number) => {
  const message = await apiDeleteFarm(id);
  return { id, message };
});

interface IState {
  list: IFarm[];
  status: string;
  error: any;
}

const farmsSlice = createSlice({
  name: 'farms',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFarms.pending, (state: IState) => {
        state.status = 'loading';
      })
      .addCase(fetchFarms.fulfilled, (state: IState, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchFarms.rejected, (state: IState, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addFarm.fulfilled, (state: IState, action) => {
        toast("Fazenda cadastrada com sucesso!", { type: "success" })
        if (action.payload) {
          state.list.push(action.payload);
        }
      })
      .addCase(updateFarm.fulfilled, (state: IState, action) => {
        toast("Dados atualizados com sucesso!", { type: "success" })
        const index = state.list.findIndex((prod) => prod.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(removeFarm.fulfilled, (state: IState, action) => {
        toast("Erro ao cadastrar a fazenda!", { type: "error" })
        state.list = state.list.filter((prod: Partial<IFarm>) => prod.id !== action.payload.id);
      });
  },
});

export default farmsSlice.reducer;

