import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/hazard-map.css';

// Custom marker icons for different hazard types
const createHazardIcon = (color) => {
  return L.divIcon({
    html: `
      <div style="
        background: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    className: 'hazard-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });
};

const HazardMap = () => {
  const defaultCenter = [28.7041, 77.1025]; // Delhi coordinates
  const zoom = 13;

  // Mock hazard data
  const hazards = [
    {
      id: 1,
      type: 'Pothole',
      lat: 28.7041,
      lng: 77.1025,
      severity: 'high',
      color: '#FF4757',
      confidence: 94,
    },
    {
      id: 2,
      type: 'Crack',
      lat: 28.705,
      lng: 77.1035,
      severity: 'medium',
      color: '#FFA500',
      confidence: 87,
    },
    {
      id: 3,
      type: 'Speed Breaker',
      lat: 28.7035,
      lng: 77.1015,
      severity: 'low',
      color: '#00D9FF',
      confidence: 92,
    },
    {
      id: 4,
      type: 'Waterlogged',
      lat: 28.71,
      lng: 77.1045,
      severity: 'high',
      color: '#FF4757',
      confidence: 89,
    },
  ];

  return (
    <div className="hazard-map-container">
      <MapContainer
        center={defaultCenter}
        zoom={zoom}
        scrollWheelZoom={true}
        className="hazard-map"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {hazards.map((hazard) => (
          <Marker
            key={hazard.id}
            position={[hazard.lat, hazard.lng]}
            icon={createHazardIcon(hazard.color)}
          >
            <Popup>
              <div className="hazard-popup">
                <h4>{hazard.type}</h4>
                <p>
                  <strong>Severity:</strong>{' '}
                  <span className={`badge badge-${hazard.severity}`}>
                    {hazard.severity}
                  </span>
                </p>
                <p>
                  <strong>Confidence:</strong> {hazard.confidence}%
                </p>
                <p>
                  <strong>Coordinates:</strong> {hazard.lat.toFixed(4)},
                  {hazard.lng.toFixed(4)}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="map-legend">
        <h4>Legend</h4>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#FF4757' }} />
          <span>High Severity</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#FFA500' }} />
          <span>Medium Severity</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#00D9FF' }} />
          <span>Low Severity</span>
        </div>
      </div>
    </div>
  );
};

export default HazardMap;