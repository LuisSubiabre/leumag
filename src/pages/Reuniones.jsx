import { Image } from "react-bootstrap";
import reuniones from "/images/reuniones.png";

const Reuniones = () => {
  return (
    <div className="container contenedor px-5 text-center">
      <h2>Reuniones de Apoderados 2025</h2>
      <hr />
      <Image
        src={reuniones}
        alt="Reuniones de Apoderados 2025"
        fluid
        rounded
      ></Image>
    </div>
  );
};

export default Reuniones;
