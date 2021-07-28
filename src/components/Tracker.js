import React from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

const position = [49.688919, 19.200649];

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {

  return (
    <MapContainer center={position} zoom={13} style={{ height: "74vh" , zIndex: 1}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup><span>
          Placeholder <br />
          Here might be something <br />
          In the future
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}



