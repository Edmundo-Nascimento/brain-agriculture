import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IFarm } from '../../../common/data/farms';

import LOCATION_ICON from "../../../assets/location.svg"

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
export const FarmMap = ({ farms }: { farms: IFarm[] }) => {
  const mapRef = useRef(null);

  const zoomToPoint = (lat: number, lng: number, zoomLevel: number) => {
    const map: any = mapRef.current;
    if (map) {
      map.flyTo([lat, lng], zoomLevel, {
        animate: true,
        duration: 2
      });
    }
  };

  const customIcon = () => new L.Icon({
    iconUrl: LOCATION_ICON,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });

  return (
    <MapContainer
      center={farms[0].generalCoordinates}
      zoom={15}
      style={{ minHeight: "300px", height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {farms.map((farm: IFarm, idx) => (
        <React.Fragment key={idx}>
          <Marker
            position={farm.generalCoordinates}
            icon={customIcon()}
            eventHandlers={{
              click: () => {
                zoomToPoint(farm.generalCoordinates[0], farm.generalCoordinates[1], 14);
              }
            }}
          >
            <Popup>
              <strong>{farm.farmName}</strong><br />
              Produtor: {farm.farmOwn}<br />
              Culturas: {farm.plantedCrops.map(c => c.value).join(", ")}
            </Popup>
          </Marker>

          <Polygon positions={farm.totalAreaCoordinates} color="purple" fillOpacity={0.3}>
            <Popup>Área Total</Popup>
          </Polygon>

          <Polygon positions={farm.farmableCoordinatesArea} color="blue" fillOpacity={0.3}>
            <Popup>Área Agricultável</Popup>
          </Polygon>

          <Polygon positions={farm.vegetationCoordinates} color="green" fillOpacity={0.3}>
            <Popup>Área de Vegetação</Popup>
          </Polygon>
        </React.Fragment>
      ))}
    </MapContainer>
  );
};