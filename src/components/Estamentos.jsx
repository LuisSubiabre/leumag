import React from "react";
import { EquipoAsistentes } from "./EquipoAsistentes";
import { EquipoDirectivo } from "./EquipoDirectivo";
import { EquipoDocente } from "./EquipoDocente";
import { EquipoAuxiliar } from "./EquipoAuxiliar";
import { Container } from "react-bootstrap";

export const Estamentos = () => {

    return (
        <>
            <Container className="contenedor">
                <EquipoDirectivo />
                <EquipoDocente />
                <EquipoAsistentes />
                <EquipoAuxiliar />
            </Container>
        </>

    );
};