import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

import { IFarm } from '../../common/data/farms';
import { useAppSelector } from '../../app/store.app';

export const ChartColors = [
  '#808080',
  '#B0C4DE',
  '#778899',
  '#708090',
  '#4682B4',
  '#D3D3D3',
  '#A52A2A',
  '#CD853F',
  '#BC8F8F',
  '#F4A460',
  '#DAA520',
  '#B8860B',
  '#8B4513'
]

const DashboardFeature = () => {
  const { list } = useAppSelector((state) => state.farms);

  return (
    <div>
      <Dashboard farms={list} />
    </div>
  )
}

export default DashboardFeature;

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return `${tooltipItem.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
};

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Dashboard = ({ farms }: { farms: IFarm[] }) => {
  const totalFarms = farms.length;
  const totalAreaHectares = farms.reduce((total, farm) =>
    total + calculateArea(farm.totalAreaCoordinates), 0
  ).toFixed(2);


  const statesCount = farms.reduce((acc: any, farm: IFarm) => {
    acc[farm.state.value] = (acc[farm.state.value] || 0) + 1;
    return acc;
  }, {});

  const stateData = {
    labels: Object.keys(statesCount),
    datasets: [{
      data: Object.values(statesCount),
      backgroundColor: ChartColors
    }]
  };

  // Gráfico de pizza por cultura
  const plantedCropsCount = farms.flatMap(farm => farm.plantedCrops)
    .reduce((acc: any, plantedCrops) => {
      acc[plantedCrops.value] = (acc[plantedCrops.value] || 0) + 1;
      return acc;
    }, {});

  const plantedCropsData = {
    labels: Object.keys(plantedCropsCount),
    datasets: [{
      data: Object.values(plantedCropsCount),
      backgroundColor: ChartColors
    }]
  };

  // Gráfico de pizza por uso de solo
  const landUseData = {
    labels: ['Área Agricultável', 'Área de Vegetação'],
    datasets: [{
      data: [
        farms.reduce((total, farm) =>
          total + calculateArea(farm.farmableCoordinatesArea), 0
        ),
        farms.reduce((total, farm) =>
          total + calculateArea(farm.vegetationCoordinates), 0
        )
      ],
      backgroundColor: ChartColors
    }]
  };

  function calculateArea(coordinates: number[][]) {
    if (coordinates.length < 3) return 0; // Precisa de pelo menos 3 coordenadas para formar um polígono
    let area = 0;
    for (let i = 0; i < coordinates.length - 1; i++) {
      area += coordinates[i][0] * coordinates[i + 1][1];
      area -= coordinates[i + 1][0] * coordinates[i][1];
    }
    area += coordinates[coordinates.length - 1][0] * coordinates[0][1];
    area -= coordinates[0][0] * coordinates[coordinates.length - 1][1];

    // Convertendo para valor absoluto e dividindo por 2
    area = Math.abs(area) / 2;

    // Assumindo que as coordenadas estão em graus (latitude/longitude), convertendo para hectares
    // Fator de conversão aproximado para áreas em torno do equador (1 grau ≈ 111 km)
    const conversionFactor = 111 * 111; // km² por grau quadrado
    const areaHectares = area * conversionFactor * 100; // Convertendo para hectares
    return areaHectares;
  }

  return (
    <div>
      <div className='mb-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className='mb-2 text-base font-semibold'>Total de Fazendas</h3>
            <div className="">
              <p className='text-3xl'>{totalFarms}</p>
            </div>
          </div>

          <div>
            <h3 className='mb-2 text-base font-semibold'>Total de Áreas (Hectares)</h3>
            <div className="">
              <p className='text-3xl'>{totalAreaHectares}</p>
            </div>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className='mb-2 text-base font-semibold'>Distribuição por estados</h3>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
            <Pie options={options} data={stateData} />
          </div>
        </div>

        <div>
          <h3 className='mb-2 text-base font-semibold'>Distribuição por Cultura</h3>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
            <Pie options={options} data={plantedCropsData} />
          </div>
        </div>

        <div>
          <h3 className='mb-2 text-base font-semibold'>Uso de Solo</h3>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
            <Pie options={options} data={landUseData} />
          </div>
        </div>
      </div>
    </div>
  );
};

