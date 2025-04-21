import "./CentroDeAlumnos.css";

const CentroDeAlumnos = () => {
  return (
    <>
      <div className="container contenedor px-5">
        <h2> Centro de Alumnos</h2>
        <hr />
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            <img
              src="/images/caa25.png"
              alt="Centro de Alumnos"
              className="img-fluid rounded-circle mb-4"
            />
          </div>
          <div className="col-12 col-md-8 col-lg-6">
            <div className="directiva-list">
              <p className="directiva-item">
                <span className="cargo">Presidenta:</span>
                <span className="nombre">Constanza Quintullanca</span>
                <span className="curso">3ro medio C</span>
              </p>
              <p className="directiva-item">
                <span className="cargo">Vicepresidenta:</span>
                <span className="nombre">Catalina Cárdenas</span>
                <span className="curso">4to medio C</span>
              </p>
              <p className="directiva-item">
                <span className="cargo">Secretaria:</span>
                <span className="nombre">Constanza Whuitt</span>
                <span className="curso">2do medio C</span>
              </p>
              <p className="directiva-item">
                <span className="cargo">Secretario de actas:</span>
                <span className="nombre">Benjamín Mendicute</span>
                <span className="curso">2do medio B</span>
              </p>
              <p className="directiva-item">
                <span className="cargo">Tesorera:</span>
                <span className="nombre">Mara Fernández</span>
                <span className="curso">3ro medio A</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CentroDeAlumnos;
