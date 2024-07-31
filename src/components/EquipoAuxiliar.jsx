import React from "react";
import { Usuarios } from "./Usuarios";
import demoImage from '../assets/img/funcionarios/demo.png';
import hortiz from '../assets/img/funcionarios/hortiz.png';
import mbahamonde from '../assets/img/funcionarios/mbahamonde.png';
import jsaldivia from '../assets/img/funcionarios/jsaldivia.png';
import svelasquez from '../assets/img/funcionarios/svelasquez.png';
import ereyes from '../assets/img/funcionarios/ereyes.png';
import gquinchen from '../assets/img/funcionarios/gquinchen.png';
import { Row, Col, Container } from "react-bootstrap";
const docentes = [
  {
    img: mbahamonde,
    nombre: "Manuel Bahamonde",
    correo: "mbhamonde@liceoexperimental.cl",
    dpto: "Auxiliar",
    more: "",
  },
  {
    img: demoImage,
    nombre: "Katherine Espinoza",
    correo: "kepinoza@liceoexperimental.cl",
    dpto: "Auxiliar",
    more: "",
  },
  {
    img: hortiz,
    nombre: "Héctor Ortíz",
    correo: "hortiz@liceoexperimental.cl",
    dpto: "Auxiliar",
    more: "",
  },
  {
    img: gquinchen,
    nombre: "Gloria Quinchen",
    correo: "gquinchen@liceoexperimental.cl",
    dpto: "Auxiliar",
    more: "",
  }, ,
  {
    img: jsaldivia,
    nombre: "José Saldivia",
    correo: "jsaldivia@liceoexperimental.cl",
    dpto: "Auxiliar",
    more: "",
  },
  {
    img: ereyes,
    nombre: "Elizabeth Reyes",
    correo: "ereyes@liceoexperimental.cl",
    dpto: "Auxiliar",
    more: "",
  },
  ,
  ,
  {
    img: svelasquez,
    nombre: "Sandra Velásquez",
    correo: "svelasquez@liceoexperimental.cl",
    dpto: "Auxiliar",
    more: "",
  }
];

export const EquipoAuxiliar = () => {
  return (
    <Container className="my-6">
      <hr />
      <h1 className="display-4 mx-3 mb-4">Departamento Auxiliar</h1>
      <Row>
        {docentes.map((member, index) => (
          <Col className="my-2" key={index}>
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
