//import { useState } from "react";
import { comunicados } from "../data/comunicados.js";
import { FaCalendarAlt, FaBullhorn, FaImage } from "react-icons/fa";

export const Comunicados = () => {
  return (
    <div className="container contenedor px-5">
      <h2> Historial de Comunicados</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {comunicados.map((comunicado) => (
          <div className="col" key={comunicado.id}>
            <div
              className="card"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 123, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div className="card-body">
                <h5 className="card-title d-flex align-items-center mb-3">
                  <FaBullhorn className="text-primary me-2" size={18} />
                  {comunicado.titulo}
                </h5>
                <p className="card-text d-flex align-items-center text-muted mb-3">
                  <FaCalendarAlt className="text-secondary me-2" size={14} />
                  {comunicado.fecha}
                </p>
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{ __html: comunicado.contenido }}
                ></p>
                <div style={{ textAlign: "center" }}>
                  <div className="position-relative d-inline-block">
                    <img
                      src={comunicado.img}
                      style={{
                        width: "80%",
                        borderRadius: "8px",
                        transition: "transform 0.3s ease",
                      }}
                      className="shadow-sm"
                      alt={comunicado.titulo}
                    />
                    <div className="position-absolute top-0 start-0 p-2">
                      <FaImage className="text-white opacity-75" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
