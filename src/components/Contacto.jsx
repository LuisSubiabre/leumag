import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Solución para un problema común con los íconos
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});


const Contacto = () => {
    return (
        <div className="container contenedor px-5">
            <h1>Contacto</h1>
            <hr />
            <div className="content">
                <div className="box">
                    <h4>Establecimiento Educacional</h4>
                    <p>Angamos 17, Punta Arenas, Chile</p>
                    <p>leumag@liceoexperimental.cl</p>
                    <p>Teléfono: 61 2454270</p>
                </div>

                <div className="box">
                    <h4>Administración y Finanzas</h4>
                    <p>Angamos 131, Punta Arenas, Chile</p>
                    <p>administracion@liceoexperimental.cl</p>
                    <p>Teléfono: 61 2240075</p>
                </div>
            </div>

            <MapContainer center={[-53.15152392798147, -70.9111466997128]} zoom={16} style={{ height: '40vh', width: '100%' }}>                        <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
                <Marker position={[-53.15152392798147, -70.9111466997128]}>
                    <Popup>
                        Liceo Experimental UMAG
                    </Popup>
                </Marker>

                <Marker position={[-53.15114765975254, -70.9101641881862]}>
                    <Popup>
                        Administración Liceo Experimental UMAG
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Contacto;