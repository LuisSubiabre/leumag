import { comunicados } from "../data/comunicados";

const UltimosComunicados = () => {
  const ultimos = comunicados.slice(0, 2);

  return (
    <div className="mb-4">
      <h3 className="fw-bold text-center ">Últimos comunicados</h3>
      {ultimos.map((comunicado) => (
        <div
          key={comunicado.id}
          className="d-flex mb-3 p-2 border rounded align-items-center bg-body-tertiary"
        >
          {comunicado.img && (
            <img
              src={comunicado.img}
              alt={comunicado.titulo}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "12px",
              }}
            />
          )}
          <div>
            <div className="small text-muted">{comunicado.fecha}</div>
            <div className="fw-semibold">{comunicado.titulo}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UltimosComunicados;
