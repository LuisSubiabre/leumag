import React from "react";
import { EquipoParvulos } from "./EquipoParvulos";
import { EquipoBasica } from "./EquipoBasica";
import { EquipoMedia } from "./EquipoMedia";
import { EquipoDocenteAdmin } from "./EquipoDocenteAdmin";
import { Row, Col } from "react-bootstrap";

export const EquipoDocente = () => {
  return (
    <div className="container hero-footer-bg">
      <EquipoParvulos />
      <EquipoBasica />
      <EquipoMedia />
      <EquipoDocenteAdmin />
    </div>
  );
};
