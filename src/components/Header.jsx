import bgImagen from "../assets/img/hero.png";
import { ButtonAccess } from "./ButtonAccess";

export const Header = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <div
          className="pt-5 text-center bg-image d-flex flex-column justify-content-between parallax-container"
          style={{
            backgroundImage: `url(${bgImagen})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
          }}
        >
          <div className="mask">
            {" "}
            {/* Agrega una máscara para oscurecer el fondo */}
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white" style={{ filter: "none" }}>
                {" "}
                {/* Fondo opaco */}
                <h1 className="mb-3">Liceo Experimental Umag</h1>
                <h4 className="mb-3">La verdad a través de la razón</h4>
                {/* <a data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="#!" role="button">A</a> */}
              </div>
            </div>
          </div>
          <div className="container contenedor">
            <div className="d-flex justify-content-center align-items-center">
              {" "}
              {/* Fixed className */}
              <ButtonAccess
                name={"Matrícula 2025"}
                link={"/matricula"}
                color={"btn-warning"}
              />
              <ButtonAccess name={"Fechas Reuniones"} link={"/Reuniones"} />
              {/* <ButtonAccess name={"Horarios"} link={"/Horarios"} /> */}
              {/* <ButtonAccess
                                name={'Evaluaciones'}
                                link={'/Evaluaciones'} /> */}
              <ButtonAccess name={"Lista de Materiales"} link={"/Materiales"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
