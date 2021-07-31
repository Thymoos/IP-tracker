import { MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import React from 'react';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map(props) {
 
function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

const height = getComputedStyle(document.documentElement)
.getPropertyValue('--height');

  return (
    <MapContainer zoomControl={false} center={[props.cords.latitude, props.cords.longitude]} zoom={13} style={{ height: height , zIndex: 1}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.cords.latitude, props.cords.longitude]}>
        <Popup><span>
          Placeholder
          </span>
        </Popup>
      </Marker>
      <ChangeMapView coords={[props.cords.latitude, props.cords.longitude]}/>
    </MapContainer>
  );
}



