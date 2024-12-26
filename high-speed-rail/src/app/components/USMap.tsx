'use client';

import { MapContainer, TileLayer, Polyline, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '@/app/utils/leaflet-icons';
import { railRoutes } from '@/app/data/railRoutes';

interface USMapProps {
  center: [number, number];
  zoom: number;
}

export function USMap({ center, zoom }: USMapProps): JSX.Element {
  return (
    <div className="w-full h-[calc(100vh-4rem)] relative">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        className="h-full w-full rounded-lg"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {railRoutes.map((route) => (
          <Polyline
            key={route.id}
            positions={route.coordinates}
            pathOptions={{ 
              color: route.color,
              weight: 4,
              opacity: 0.8
            }}
          >
            <Tooltip sticky>{route.name}</Tooltip>
          </Polyline>
        ))}
      </MapContainer>
    </div>
  );
}