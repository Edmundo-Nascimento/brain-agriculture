export interface IFarm {
  id: number;
  dataCriacao: string;
  document: string;
  farmOwn: string;
  farmName: string;
  city: string;
  state: IState;
  generalCoordinates: any;
  totalAreaCoordinates: any;
  farmableCoordinatesArea: any;
  vegetationCoordinates: any;
  plantedCrops: ICultura[];
  totalArea: string;
  agriculturalArea: string;
  vegetationArea: string;
}

export interface ICultura {
  id: number;
  value: string;
  label: string;
  type: string;
}

export interface IState {
  id: number;
  value: string;
  label: string;
}

export const farmList = [
  {
    id: 1,
    dataCriacao: "2023-08-15",
    document: "123.456.789-00",
    farmOwn: "João Silva",
    farmName: "Fazenda Esperança",
    city: "Uberaba",
    state: {
      id: 13,
      label: "Minas Gerais",
      value: "MG",
    },
    generalCoordinates: [-19.7477, -47.938],
    totalAreaCoordinates: [
      [-19.747, -47.94],
      [-19.748, -47.937],
      [-19.749, -47.939],
      [-19.748, -47.94],
    ],
    farmableCoordinatesArea: [
      [-19.7475, -47.9385],
      [-19.7485, -47.9375],
      [-19.7495, -47.9385],
      [-19.7485, -47.9395],
    ],
    vegetationCoordinates: [
      [-19.747, -47.9405],
      [-19.748, -47.9395],
      [-19.749, -47.9405],
      [-19.748, -47.9415],
    ],
    plantedCrops: [
      { id: 10, value: "Soja", label: "Soja", type: "Leguminosa" },
      { id: 2, value: "Milho", label: "Milho", type: "Grão" },
    ],
    totalArea: 500,
    agriculturalArea: 300,
    vegetationArea: 150,
  },
  {
    id: 2,
    dataCriacao: "2023-08-18",
    document: "456.789.123-00",
    farmOwn: "Maria Souza",
    farmName: "Fazenda Bela Vista",
    city: "Ribeirão Preto",
    state: {
      id: 25,
      label: "São Paulo",
      value: "SP",
    },
    generalCoordinates: [-21.1781, -47.806],
    totalAreaCoordinates: [
      [-21.178, -47.807],
      [-21.179, -47.805],
      [-21.18, -47.806],
      [-21.179, -47.807],
    ],
    farmableCoordinatesArea: [
      [-21.1785, -47.8065],
      [-21.1795, -47.8055],
      [-21.1805, -47.8065],
      [-21.1795, -47.8075],
    ],
    vegetationCoordinates: [
      [-21.178, -47.808],
      [-21.179, -47.807],
      [-21.18, -47.808],
      [-21.179, -47.809],
    ],
    plantedCrops: [
      { id: 59, value: "Café", label: "Café", type: "Industrial" },
      { id: 54, value: "Cana-de-açúcar", label: "Cana-de-açúcar", type: "Energia" },
    ],
    totalArea: 750,
    agriculturalArea: 450,
    vegetationArea: 200,
  },
  {
    id: 3,
    dataCriacao: "2023-08-20",
    document: "789.123.456-00",
    farmOwn: "Carlos Lima",
    farmName: "Fazenda Boa Vista",
    city: "Goiânia",
    state: {
      id: 9,
      label: "Goiás",
      value: "GO",
    },
    generalCoordinates: [-16.6869, -49.2648],
    totalAreaCoordinates: [
      [-16.686, -49.265],
      [-16.687, -49.264],
      [-16.688, -49.265],
      [-16.687, -49.266],
    ],
    farmableCoordinatesArea: [
      [-16.6865, -49.2645],
      [-16.6875, -49.2635],
      [-16.6885, -49.2645],
      [-16.6875, -49.2655],
    ],
    vegetationCoordinates: [
      [-16.686, -49.2665],
      [-16.687, -49.2655],
      [-16.688, -49.2665],
      [-16.687, -49.2675],
    ],
    plantedCrops: [
      { id: 10, value: "Soja", label: "Soja", type: "Leguminosa" },
      { id: 2, value: "Milho", label: "Milho", type: "Grão" },
    ],
    totalArea: 600,
    agriculturalArea: 350,
    vegetationArea: 180,
  },
  {
    id: 4,
    dataCriacao: "2023-08-22",
    document: "147.258.369-00",
    farmOwn: "Ana Ferreira",
    farmName: "Fazenda Horizonte",
    city: "Cuiabá",
    state: {
      id: 11,
      label: "Mato Grosso",
      value: "MT",
    },
    generalCoordinates: [-15.6014, -56.0979],
    totalAreaCoordinates: [
      [-15.601, -56.098],
      [-15.602, -56.097],
      [-15.603, -56.098],
      [-15.602, -56.099],
    ],
    farmableCoordinatesArea: [
      [-15.6015, -56.0975],
      [-15.6025, -56.0965],
      [-15.6035, -56.0975],
      [-15.6025, -56.0985],
    ],
    vegetationCoordinates: [
      [-15.601, -56.0995],
      [-15.602, -56.0985],
      [-15.603, -56.0995],
      [-15.602, -56.1005],
    ],
    plantedCrops: [
      { id: 50, value: "Algodão", label: "Algodão", type: "Fibra" },
      { id: 2, value: "Milho", label: "Milho", type: "Grão" },
    ],
    totalArea: 800,
    agriculturalArea: 500,
    vegetationArea: 250,
  },
  {
    id: 5,
    dataCriacao: "2023-08-25",
    document: "963.852.741-00",
    farmOwn: "Pedro Alves",
    farmName: "Fazenda São José",
    city: "Campo Grande",
    state: {
      id: 12,
      label: "Mato Grosso do Sul",
      value: "MS",
    },
    generalCoordinates: [-20.4697, -54.6201],
    totalAreaCoordinates: [
      [-20.47, -54.621],
      [-20.471, -54.62],
      [-20.472, -54.621],
      [-20.471, -54.622],
    ],
    farmableCoordinatesArea: [
      [-20.4705, -54.6205],
      [-20.4715, -54.6195],
      [-20.4725, -54.6205],
      [-20.4715, -54.6215],
    ],
    vegetationCoordinates: [
      [-20.47, -54.6225],
      [-20.471, -54.6215],
      [-20.472, -54.6225],
      [-20.471, -54.6235],
    ],
    plantedCrops: [
      { id: 10, value: "Soja", label: "Soja", type: "Leguminosa" },
      { id: 2, value: "Milho", label: "Milho", type: "Grão" },
    ],
    totalArea: 700,
    agriculturalArea: 420,
    vegetationArea: 220,
  },
  {
    id: 6,
    dataCriacao: "2023-08-28",
    document: "852.741.963-00",
    farmOwn: "Lucas Mendes",
    farmName: "Fazenda Nova Era",
    city: "Belo Horizonte",
    state: {
      id: 13,
      label: "Minas Gerais",
      value: "MG",
    },
    generalCoordinates: [-19.9245, -43.9352],
    totalAreaCoordinates: [
      [-19.925, -43.936],
      [-19.926, -43.935],
      [-19.927, -43.936],
      [-19.926, -43.937],
    ],
    farmableCoordinatesArea: [
      [-19.9255, -43.9355],
      [-19.9265, -43.9345],
      [-19.9275, -43.9355],
      [-19.9265, -43.9365],
    ],
    vegetationCoordinates: [
      [-19.925, -43.937],
      [-19.926, -43.936],
      [-19.927, -43.937],
      [-19.926, -43.938],
    ],
    plantedCrops: [
      { id: 59, value: "Café", label: "Café", type: "Industrial" },
      { id: 54, value: "Cana-de-açúcar", label: "Cana-de-açúcar", type: "Energia" },
    ],
    totalArea: 650,
    agriculturalArea: 380,
    vegetationArea: 180,
  },
  {
    id: 7,
    dataCriacao: "2023-08-30",
    document: "741.963.852-00",
    farmOwn: "Fernanda Carvalho",
    farmName: "Fazenda Rio Grande",
    city: "Curitiba",
    state: {
      id: 16,
      label: "Paraná",
      value: "PR",
    },
    generalCoordinates: [-25.432, -49.2715],
    totalAreaCoordinates: [
      [-25.4325, -49.2725],
      [-25.4335, -49.2715],
      [-25.4345, -49.2725],
      [-25.4335, -49.2735],
    ],
    farmableCoordinatesArea: [
      [-25.433, -49.272],
      [-25.434, -49.271],
      [-25.435, -49.272],
      [-25.434, -49.273],
    ],
    vegetationCoordinates: [
      [-25.4325, -49.2735],
      [-25.4335, -49.2725],
      [-25.4345, -49.2735],
      [-25.4335, -49.2745],
    ],
    plantedCrops: [
      { id: 10, value: "Soja", label: "Soja", type: "Leguminosa" },
      { id: 50, value: "Algodão", label: "Algodão", type: "Fibra" },
    ],
    totalArea: 550,
    agriculturalArea: 320,
    vegetationArea: 150,
  },
  {
    id: 8,
    dataCriacao: "2023-09-01",
    document: "159.753.486-00",
    farmOwn: "Rafael Pereira",
    farmName: "Fazenda Estrela",
    city: "Salvador",
    state: {
      id: 5,
      label: "Bahia",
      value: "BA",
    },
    generalCoordinates: [-12.9714, -38.5014],
    totalAreaCoordinates: [
      [-12.971, -38.502],
      [-12.972, -38.501],
      [-12.973, -38.502],
      [-12.972, -38.503],
    ],
    farmableCoordinatesArea: [
      [-12.9715, -38.5015],
      [-12.9725, -38.5005],
      [-12.9735, -38.5015],
      [-12.9725, -38.5025],
    ],
    vegetationCoordinates: [
      [-12.971, -38.503],
      [-12.972, -38.502],
      [-12.973, -38.503],
      [-12.972, -38.504],
    ],
    plantedCrops: [
      { id: 54, value: "Cana-de-açúcar", label: "Cana-de-açúcar", type: "Energia" },
      { id: 2, value: "Milho", label: "Milho", type: "Grão" },
    ],
    totalArea: 720,
    agriculturalArea: 420,
    vegetationArea: 250,
  },
  {
    id: 9,
    dataCriacao: "2023-09-03",
    document: "258.369.147-00",
    farmOwn: "Paula Rodrigues",
    farmName: "Fazenda Horizonte Azul",
    city: "Fortaleza",
    state: {
      id: 6,
      label: "Ceará",
      value: "CE",
    },
    generalCoordinates: [-3.7172, -38.5434],
    totalAreaCoordinates: [
      [-3.717, -38.544],
      [-3.718, -38.543],
      [-3.719, -38.544],
      [-3.718, -38.545],
    ],
    farmableCoordinatesArea: [
      [-3.7175, -38.5435],
      [-3.7185, -38.5425],
      [-3.7195, -38.5435],
      [-3.7185, -38.5445],
    ],
    vegetationCoordinates: [
      [-3.717, -38.545],
      [-3.718, -38.544],
      [-3.719, -38.545],
      [-3.718, -38.546],
    ],
    plantedCrops: [
      { id: 50, value: "Algodão", label: "Algodão", type: "Fibra" },
      { id: 10, value: "Soja", label: "Soja", type: "Leguminosa" },
    ],
    totalArea: 680,
    agriculturalArea: 390,
    vegetationArea: 220,
  },
  {
    id: 10,
    dataCriacao: "2023-09-05",
    document: "963.147.258-00",
    farmOwn: "Marcos Oliveira",
    farmName: "Fazenda Sol Nascente",
    city: "Recife",
    state: {
      id: 17,
      label: "Pernambuco",
      value: "PE",
    },
    generalCoordinates: [-8.0476, -34.877],
    totalAreaCoordinates: [
      [-8.048, -34.878],
      [-8.049, -34.877],
      [-8.05, -34.878],
      [-8.049, -34.879],
    ],
    farmableCoordinatesArea: [
      [-8.0485, -34.8775],
      [-8.0495, -34.8765],
      [-8.0505, -34.8775],
      [-8.0495, -34.8785],
    ],
    vegetationCoordinates: [
      [-8.048, -34.879],
      [-8.049, -34.878],
      [-8.05, -34.879],
      [-8.049, -34.88],
    ],
    plantedCrops: [
      { id: 54, value: "Cana-de-açúcar", label: "Cana-de-açúcar", type: "Energia" },
      { id: 2, value: "Milho", label: "Milho", type: "Grão" },
    ],
    totalArea: 800,
    agriculturalArea: 480,
    vegetationArea: 260,
  },
  {
    id: 11,
    dataCriacao: "2023-09-07",
    document: "147.963.258-00",
    farmOwn: "Sônia Costa",
    farmName: "Fazenda Vista Alegre",
    city: "Porto Alegre",
    state: {
      id: 21,
      label: "Rio Grande do Sul",
      value: "RS",
    },
    generalCoordinates: [-30.0346, -51.2177],
    totalAreaCoordinates: [
      [-30.034, -51.218],
      [-30.035, -51.217],
      [-30.036, -51.218],
      [-30.035, -51.219],
    ],
    farmableCoordinatesArea: [
      [-30.0345, -51.2175],
      [-30.0355, -51.2165],
      [-30.0365, -51.2175],
      [-30.0355, -51.2185],
    ],
    vegetationCoordinates: [
      [-30.034, -51.219],
      [-30.035, -51.218],
      [-30.036, -51.219],
      [-30.035, -51.22],
    ],
    plantedCrops: [
      { id: 10, value: "Soja", label: "Soja", type: "Leguminosa" },
      { id: 59, value: "Café", label: "Café", type: "Industrial" },
    ],
    totalArea: 620,
    agriculturalArea: 370,
    vegetationArea: 180,
  },
  {
    id: 12,
    dataCriacao: "2023-09-09",
    document: "258.147.369-00",
    farmOwn: "Ricardo Almeida",
    farmName: "Fazenda Campo Verde",
    city: "Manaus",
    state: {
      id: 4,
      label: "Amazonas",
      value: "AM",
    },
    generalCoordinates: [-3.119, -60.0217],
    totalAreaCoordinates: [
      [-3.1195, -60.0225],
      [-3.1205, -60.0215],
      [-3.1215, -60.0225],
      [-3.1205, -60.0235],
    ],
    farmableCoordinatesArea: [
      [-3.12, -60.022],
      [-3.121, -60.021],
      [-3.122, -60.022],
      [-3.121, -60.023],
    ],
    vegetationCoordinates: [
      [-3.1195, -60.0235],
      [-3.1205, -60.0225],
      [-3.1215, -60.0235],
      [-3.1205, -60.0245],
    ],
    plantedCrops: [
      { id: 59, value: "Café", label: "Café", type: "Industrial" },
      { id: 10, value: "Soja", label: "Soja", type: "Leguminosa" },
    ],
    totalArea: 750,
    agriculturalArea: 430,
    vegetationArea: 200,
  },
  {
    id: 13,
    dataCriacao: "2023-09-11",
    document: "369.258.147-00",
    farmOwn: "Gabriel Santos",
    farmName: "Fazenda Santa Clara",
    city: "Natal",
    state: {
      id: 20,
      label: "Rio Grande do Norte",
      value: "RN",
    },
    generalCoordinates: [-5.7945, -35.211],
    totalAreaCoordinates: [
      [-5.795, -35.212],
      [-5.796, -35.211],
      [-5.797, -35.212],
      [-5.796, -35.213],
    ],
    farmableCoordinatesArea: [
      [-5.7955, -35.2115],
      [-5.7965, -35.2105],
      [-5.7975, -35.2115],
      [-5.7965, -35.2125],
    ],
    vegetationCoordinates: [
      [-5.795, -35.213],
      [-5.796, -35.212],
      [-5.797, -35.213],
      [-5.796, -35.214],
    ],
    plantedCrops: [
      { id: 50, value: "Algodão", label: "Algodão", type: "Fibra" },
      { id: 2, value: "Milho", label: "Milho", type: "Grão" },
    ],
    totalArea: 580,
    agriculturalArea: 340,
    vegetationArea: 160,
  },
  {
    id: 14,
    dataCriacao: "2023-09-13",
    document: "741.258.963-00",
    farmOwn: "Luciana Ribeiro",
    farmName: "Fazenda Palmeira",
    city: "Aracaju",
    state: {
      id: 26,
      label: "Sergipe",
      value: "SE",
    },
    generalCoordinates: [-10.9472, -37.0731],
    totalAreaCoordinates: [
      [-10.948, -37.074],
      [-10.949, -37.073],
      [-10.95, -37.074],
      [-10.949, -37.075],
    ],
    farmableCoordinatesArea: [
      [-10.9485, -37.0735],
      [-10.9495, -37.0725],
      [-10.9505, -37.0735],
      [-10.9495, -37.0745],
    ],
    vegetationCoordinates: [
      [-10.948, -37.075],
      [-10.949, -37.074],
      [-10.95, -37.075],
      [-10.949, -37.076],
    ],
    plantedCrops: [
      { id: 59, value: "Café", label: "Café", type: "Industrial" },
      { id: 2, value: "Milho", label: "Milho", type: "Grão" },
    ],
    totalArea: 660,
    agriculturalArea: 390,
    vegetationArea: 210,
  },
  {
    id: 15,
    dataCriacao: "2023-09-15",
    document: "852.963.741-00",
    farmOwn: "Juliana Mendes",
    farmName: "Fazenda São João",
    city: "Maceió",
    state: {
      id: 2,
      label: "Alagoas",
      value: "AL",
    },
    generalCoordinates: [-9.6498, -35.7089],
    totalAreaCoordinates: [
      [-9.65, -35.7095],
      [-9.651, -35.7085],
      [-9.652, -35.7095],
      [-9.651, -35.7105],
    ],
    farmableCoordinatesArea: [
      [-9.6505, -35.709],
      [-9.6515, -35.708],
      [-9.6525, -35.709],
      [-9.6515, -35.71],
    ],
    vegetationCoordinates: [
      [-9.65, -35.7105],
      [-9.651, -35.7095],
      [-9.652, -35.7105],
      [-9.651, -35.7115],
    ],
    plantedCrops: [
      { id: 50, value: "Algodão", label: "Algodão", type: "Fibra" },
      { id: 10, value: "Soja", label: "Soja", type: "Leguminosa" },
    ],
    totalArea: 700,
    agriculturalArea: 400,
    vegetationArea: 230,
  },
];