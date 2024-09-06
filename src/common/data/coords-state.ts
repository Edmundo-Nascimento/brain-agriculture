export const coordsByState: any = {
  ac: {
    center: { lat: -8.77, lng: -70.55 },
    zoom: 8,
  },
  al: {
    center: { lat: -9.71, lng: -35.73 },
    zoom: 9,
  },
  am: {
    center: { lat: -3.07, lng: -61.66 },
    zoom: 7,
  },
  ap: {
    center: { lat: 1.41, lng: -51.77 },
    zoom: 8,
  },
  ba: {
    center: { lat: -12.96, lng: -38.51 },
    zoom: 8,
  },
  ce: {
    center: { lat: -3.71, lng: -38.54 },
    zoom: 8,
  },
  df: {
    center: { lat: -15.83, lng: -47.86 },
    zoom: 9,
  },
  es: {
    center: { lat: -19.19, lng: -40.34 },
    zoom: 8,
  },
  go: {
    center: { lat: -16.64, lng: -49.31 },
    zoom: 9,
  },
  ma: {
    center: { lat: -2.55, lng: -44.30 },
    zoom: 8,
  },
  mt: {
    center: { lat: -12.64, lng: -55.42 },
    zoom: 8,
  },
  ms: {
    center: { lat: -20.51, lng: -54.54 },
    zoom: 8,
  },
  mg: {
    center: { lat: -18.10, lng: -44.38 },
    zoom: 8,
  },
  pa: {
    center: { lat: -5.53, lng: -52.29 },
    zoom: 8,
  },
  pb: {
    center: { lat: -7.06, lng: -35.55 },
    zoom: 8,
  },
  pr: {
    center: { lat: -24.89, lng: -51.55 },
    zoom: 8,
  },
  pe: {
    center: { lat: -8.28, lng: -35.07 },
    zoom: 8,
  },
  pi: {
    center: { lat: -8.28, lng: -43.68 },
    zoom: 8,
  },
  rj: {
    center: { lat: -22.84, lng: -43.15 },
    zoom: 8,
  },
  rn: {
    center: { lat: -5.22, lng: -36.52 },
    zoom: 8,
  },
  ro: {
    center: { lat: -11.22, lng: -62.80 },
    zoom: 8,
  },
  rs: {
    center: { lat: -30.01, lng: -51.22 },
    zoom: 8,
  },
  rr: {
    center: { lat: 1.89, lng: -61.22 },
    zoom: 8,
  },
  sc: {
    center: { lat: -27.33, lng: -49.44 },
    zoom: 8,
  },
  se: {
    center: { lat: -10.90, lng: -37.07 },
    zoom: 8,
  },
  sp: {
    center: { lat: -23.55, lng: -46.64 },
    zoom: 8,
  },
  to: {
    center: { lat: -10.25, lng: -48.25 },
    zoom: 8,
  }

}


// Função para gerar coordenadas aleatórias próximas a uma coordenada de referência
const gerarCoordenadasAleatorias = (latRef: number, lonRef: number, range: number) => {
  const lat = latRef + (Math.random() - 0.5) * range;
  const lon = lonRef + (Math.random() - 0.5) * range;
  return [lat, lon];
};

// Função para gerar áreas aleatórias para total, agriculturável e vegetação
export const gerarDadosDeCoordenadas = (generalCoordinates: any, range: any) => {
  const [latRef, lonRef] = generalCoordinates;

  const totalAreaCoordinates = [
    gerarCoordenadasAleatorias(latRef, lonRef, range),
    gerarCoordenadasAleatorias(latRef, lonRef, range),
    gerarCoordenadasAleatorias(latRef, lonRef, range),
    gerarCoordenadasAleatorias(latRef, lonRef, range),
  ];

  const farmableCoordinatesArea = [
    gerarCoordenadasAleatorias(latRef, lonRef, range / 2),
    gerarCoordenadasAleatorias(latRef, lonRef, range / 2),
    gerarCoordenadasAleatorias(latRef, lonRef, range / 2),
    gerarCoordenadasAleatorias(latRef, lonRef, range / 2),
  ];

  const vegetationCoordinates = [
    gerarCoordenadasAleatorias(latRef, lonRef, range / 1.5),
    gerarCoordenadasAleatorias(latRef, lonRef, range / 1.5),
    gerarCoordenadasAleatorias(latRef, lonRef, range / 1.5),
    gerarCoordenadasAleatorias(latRef, lonRef, range / 1.5),
  ];

  return {
    generalCoordinates: [latRef, lonRef],
    totalAreaCoordinates,
    farmableCoordinatesArea,
    vegetationCoordinates,
  };
};

export const range = 0.01; // Ajuste de variação para a área