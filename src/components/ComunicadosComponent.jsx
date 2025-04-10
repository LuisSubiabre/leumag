import { Link } from "react-router-dom";
import { comunicados } from "../comunicados.js";
import { useState } from "react";

export const ComunicadosComponent = () => {
  const primerosAvisos = comunicados.slice(0, 2);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Últimos comunicados</h2>
        </div>
      </div>

      <div className="row">
        {primerosAvisos.map((comunicados) => (
          <div
            className="col-md-6"
            key={comunicados.id}
            style={{ marginBottom: "30px" }}
          >
            <div
              className="card"
              style={{
                boxShadow:
                  hoveredCard === comunicados.id
                    ? "0 8px 16px rgba(0, 123, 255, 0.2)"
                    : "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                transform:
                  hoveredCard === comunicados.id ? "translateY(-5px)" : "none",
                cursor: "pointer",
                height: "100%",
              }}
              onMouseEnter={() => setHoveredCard(comunicados.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-body" style={{ padding: "25px" }}>
                <h5
                  className="card-title"
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  {comunicados.titulo}
                </h5>
                <p
                  className="card-text"
                  style={{
                    marginBottom: "15px",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                  }}
                >
                  <i
                    className="fas fa-calendar-alt"
                    style={{ marginRight: "8px" }}
                  ></i>
                  {comunicados.fecha}
                </p>
                <div
                  className="card-text"
                  dangerouslySetInnerHTML={{ __html: comunicados.contenido }}
                  style={{
                    marginBottom: "20px",
                    lineHeight: "1.6",
                  }}
                ></div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={comunicados.img}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredCard === comunicados.id
                          ? "scale(1.02)"
                          : "scale(1)",
                    }}
                    alt={comunicados.titulo}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="my-3 d-flex flex-row-reverse bd-highlight">
          <Link
            to="/Comunicados"
            className="btn btn-primary"
            style={{
              fontSize: "1.1rem",
              padding: "12px 25px",
              borderRadius: "30px",
              fontWeight: "600",
              boxShadow: "0 4px 8px rgba(0, 123, 255, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 6px 12px rgba(0, 123, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 8px rgba(0, 123, 255, 0.3)";
            }}
          >
            Ver todos los comunicados
          </Link>
        </div>
      </div>
    </div>
  );
};
