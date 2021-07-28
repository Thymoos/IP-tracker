import React from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import icon from './Icon';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const position = [49.688919, 19.200649];

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('./marker-32.png'),
    iconUrl: require('./marker-32.png')
});

export default function Map() {

  return (
    <MapContainer center={position} zoom={13} style={{ height: "74vh" , zIndex: 1}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}




