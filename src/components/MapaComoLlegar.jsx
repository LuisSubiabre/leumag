import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  FaDirections,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { emails } from "../emails";
import "./MapaComoLlegar.css";

const SEDES = [
  {
    id: "liceo",
    nombre: "Liceo Experimental UMAG",
    direccion: "Angamos 17, Punta Arenas",
    telefono: "61 2454270",
    email: emails.contacto,
    posicion: [-53.15152392798147, -70.9111466997128],
    variante: "main",
  },
  {
    id: "administracion",
    nombre: "Administración y Finanzas",
    direccion: "Angamos 131, Punta Arenas",
    telefono: "61 2240075",
    email: emails.administracion,
    posicion: [-53.15114765975254, -70.9101641881862],
    variante: "alt",
  },
];

const [LAT, LNG] = SEDES[0].posicion;
const COMO_LLEGAR_URL = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

const telHref = (telefono) => `tel:+56${telefono.replace(/\s/g, "")}`;

const pin = (variant) =>
  L.divIcon({
    className: "",
    html: `<span class="mapa-llegar__pin mapa-llegar__pin--${variant}"></span>`,
    iconSize: [30, 42],
    iconAnchor: [15, 40],
    popupAnchor: [0, -36],
  });

/**
 * Bloque "Cómo llegar": datos de contacto de cada sede + mapa.
 * Se usa en el Home (h2) y en la página de Contacto (h1, con correos).
 */
function MapaComoLlegar({
  titulo = "Cómo llegar",
  kicker = "Visítanos",
  tituloComo: Titulo = "h2",
  mostrarCorreos = false,
  tituloId = "como-llegar-titulo",
}) {
  const esMovil = L.Browser.mobile;

  return (
    <div className="mapa-llegar">
      <div className="mapa-llegar__info">
        {kicker && <p className="mapa-llegar__kicker">{kicker}</p>}
        <Titulo id={tituloId} className="mapa-llegar__title">
          {titulo}
        </Titulo>

        <div className="mapa-llegar__sedes">
          {SEDES.map((sede) => (
            <section
              key={sede.id}
              className={`mapa-llegar__sede mapa-llegar__sede--${sede.variante}`}
              aria-label={sede.nombre}
            >
              <h3>{sede.nombre}</h3>
              <ul>
                <li>
                  <FaMapMarkerAlt aria-hidden="true" />
                  <span>{sede.direccion}</span>
                </li>
                <li>
                  <FaPhoneAlt aria-hidden="true" />
                  <a href={telHref(sede.telefono)}>{sede.telefono}</a>
                </li>
                {mostrarCorreos && (
                  <li>
                    <FaEnvelope aria-hidden="true" />
                    <a href={`mailto:${sede.email}`}>{sede.email}</a>
                  </li>
                )}
              </ul>
            </section>
          ))}
        </div>

        <a
          href={COMO_LLEGAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mapa-llegar__cta"
        >
          <FaDirections aria-hidden="true" />
          Obtener indicaciones
        </a>
      </div>

      <div className="mapa-llegar__frame">
        <MapContainer
          center={[-53.1513, -70.9106]}
          zoom={16}
          scrollWheelZoom={false}
          dragging={!esMovil}
          className="mapa-llegar__canvas"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {SEDES.map((sede) => (
            <Marker key={sede.id} position={sede.posicion} icon={pin(sede.variante)}>
              <Popup>
                <strong>{sede.nombre}</strong>
                <br />
                {sede.direccion}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapaComoLlegar;
