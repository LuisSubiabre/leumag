import React from "react";
import { Usuarios } from "./Usuarios";
import demoImage from '../assets/img/funcionarios/demo.png';
import lbarria from '../assets/img/funcionarios/lbarria.png';
import tcardenas from '../assets/img/funcionarios/tcardenas.png';
import msolis from '../assets/img/funcionarios/msolis.png';
import dandrade from '../assets/img/funcionarios/dandrade.png';
import nrodriguez from '../assets/img/funcionarios/nrodriguez.png';
import jvenegas from '../assets/img/funcionarios/jvenegas.png';
import abarrientos from '../assets/img/funcionarios/abarrientos.png';
import { Row, Col, Container } from "react-bootstrap";

const docentes = [
  {
    img: lbarria,
    nombre: "Luz Barría",
    correo: "lbarria@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT2A",
  },
  {
    img: demoImage,
    nombre: "Paola Nuñez",
    correo: "pnunez@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT1A",
  },
  {
    img: msolis,
    nombre: "Maria José Solís",
    correo: "msolis@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT1B",
  },

  {
    img: tcardenas,
    nombre: "Teresa Cárdenas",
    correo: "tcardenas@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT2B",
  },

  {
    img: dandrade,
    nombre: "Deice Andrade",
    correo: "dandrade@liceoexperimental.cl",
    dpto: "Técnico en Educación Parvularia",
    more: "NT 1A",
  },
  {
    img: nrodriguez,
    nombre: "Ninfa Rodríguez",
    correo: "nrodriguez@liceoexperimental.cl",
    dpto: "Técnico en Educación Parvularia",
    more: "NT 1B",
  },
  {
    img: jvenegas,
    nombre: "Jaqueline Venegas",
    correo: "jvenegas@liceoexperimental.cl",
    dpto: "Técnico en Educación Parvularia",
    more: "NT 2B",
  }
  ,
  {
    img: abarrientos,
    nombre: "Alejandra Barrientos",
    correo: "abarrientos@liceoexperimental.cl",
    dpto: "Técnico en Educación Parvularia",
    more: "NT 2A",
  }
  ,
  {
    img: demoImage,
    nombre: "Franco Figueroa",
    correo: "ffigueroa@liceoexperimental.cl",
    dpto: "Profesor Educación Músical",
    more: "NT 1 y NT 2",
  }
];

export const EquipoParvulos = () => {
  return (
    <Container className="my-6">
      <hr />
      <h1 className="display-4 mx-3 mb-4">Educación Parvularia</h1>
      <Row>
        {docentes.map((member, index) => (
          <Col className="col my-2" key={index}>
            <Usuarios
              img={member.img}
              nombre={member.nombre}
              correo={member.correo}
              dpto={member.dpto}
              more={member.more}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
