import React from "react";
import { Usuarios } from "./Usuarios";
import demoImage from '../assets/img/funcionarios/demo.png';
import hoyarzun from '../assets/img/funcionarios/hoyarzun.png';
import cvargas from '../assets/img/funcionarios/cvargas.png';
import cvergara from '../assets/img/funcionarios/cvergara.png';
import lgomez from '../assets/img/funcionarios/lgomez.png';
import tguidipani from '../assets/img/funcionarios/tguidipani.png';
import ccardenas from '../assets/img/funcionarios/ccardenas.png';
import fperez from '../assets/img/funcionarios/fperez.png';
import jgonzalez from '../assets/img/funcionarios/jgonzalez.png';
import ncanio from '../assets/img/funcionarios/ncanio.png';
import iacuna from '../assets/img/funcionarios/iacuna.png';
import mmolina from '../assets/img/funcionarios/mmolina.png';
import rbarria from '../assets/img/funcionarios/rbarria.png';
import vsantana from '../assets/img/funcionarios/vsantana.png';
import karaya from '../assets/img/funcionarios/karaya.png';
import { Row, Col, Container } from "react-bootstrap";
import mmercado from '../assets/img/funcionarios/mmercado.png';
import pespinoza from '../assets/img/funcionarios/pespinoza.png';
import vgarret from '../assets/img/funcionarios/vgarret.png';
import azamorano from '../assets/img/funcionarios/azamorano.png';
import movando from '../assets/img/funcionarios/movando.png';
import plemus from '../assets/img/funcionarios/plemus.png';
import mdiazbustos from '../assets/img/funcionarios/mdiazbustos.png';
import fvera from '../assets/img/funcionarios/fvera.png';
const docentes = [
  {
    img: vgarret,
    nombre: "Victoria Garret",
    correo: "vgarret@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 1° Básico A",
    asignatura: "Generalista"
  },
  {
    img: cvergara,
    nombre: "Carolina Vergara",
    correo: "cvergara@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 1° Básico B",
    asignatura: "Generalista"
  },
  {
    img: mmercado,
    nombre: "Mónica Mércado",
    correo: "mmercado@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 1° Básico B",
    asignatura: "Generalista"
  },
  {
    img: hoyarzun,
    nombre: "Helda Oyarzún",
    correo: "hoyarzun@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 2° Básico A",
    asignatura: "Generalista"
  },
  {
    img: cvargas,
    nombre: "Catherine Vargas",
    correo: "cvargas@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 2° Básico B",
    asignatura: "Generalista – Tecnología"
  },
  {
    img: movando,
    nombre: "Mario Ovando",
    correo: "movando@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 3° Básico A",
    asignatura: "Inglés"
  },
  {
    img: karaya,
    nombre: "Katherine Araya",
    correo: "karaya@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 3° Básico B",
    asignatura: "Matemática"
  },
  {
    img: tguidipani,
    nombre: "Tatiana Guidipani",
    correo: "tguidipani@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 4° Básico A",
    asignatura: "Educación Física"
  },
  {
    img: plemus,
    nombre: "Priscila Lemus",
    correo: "plemus@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 4° Básico B",
    asignatura: "Educación Física"
  },
  {
    img: jgonzalez,
    nombre: "Jonathan González",
    correo: "jgonzalez@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 5° Básico A",
    asignatura: "Lenguaje"
  },
  {
    img: ccardenas,
    nombre: "Carola Cárdenas",
    correo: "ccardenas@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 5° Básico B",
    asignatura: "Ciencias Naturales – Tecnología"
  },
  {
    img: pespinoza,
    nombre: "Pablo Espinoza",
    correo: "pespinoza@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 6° Básico A",
    asignatura: "Inglés"
  },
  {
    img: vsantana,
    nombre: "Viviana Santana",
    correo: "vsantana@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 6° Básico B",
    asignatura: "Artes – Tecnología"
  },
  {
    img: azamorano,
    nombre: "Araceli Zamorano",
    correo: "azamorano@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 7° Básico A",
    asignatura: "Lenguaje"
  },
  {
    img: ncanio,
    nombre: "Natalia Canio",
    correo: "ncanio@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 7° Básico B",
    asignatura: "Matemática"
  },
  {
    img: fperez,
    nombre: "Fredy Pérez",
    correo: "fperez@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 8° Básico A",
    asignatura: "Educación Física"
  },
  {
    img: demoImage,
    nombre: "Cecilia Lara",
    correo: "clara@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 8° Básico B",
    asignatura: "Matemática"
  },
  {
    img: iacuna,
    nombre: "Ingrid Acuña",
    correo: "iacuna@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Religión Evangélica"
  },
  {
    img: rbarria,
    nombre: "Romina Barría",
    correo: "rbarria@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Historia – Artes"
  },
  {
    img: lgomez,
    nombre: "Luis Gómez",
    correo: "lgomez@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Música – Artes"
  },
  {
    img: demoImage,
    nombre: "Macarena Gutiérrez",
    correo: "mgutierrez@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Lenguaje"
  },

  {
    img: mmolina,
    nombre: "Marlen Molina",
    correo: "mmolina@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Religión Católica"
  },
  {
    img: demoImage,
    nombre: "Rosio Ruiz",
    correo: "rruiz@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Inglés"
  },
  {
    img: fvera,
    nombre: "Fernanda Vera",
    correo: "fvera@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Historia"
  },
  {
    img: mdiazbustos,
    nombre: "Miguel Diaz",
    correo: "mdiazbustos@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Cs. Naturales"
  }
];

export const EquipoBasica = () => {
  return (
    <Container className="my-6">
      <hr />
      <h1 className="display-4 mx-3 mb-4">Educación Básica</h1>
      <Row>
        {docentes.map((member, index) => (
          <Col className="my-2" key={index}>
            <Usuarios
              img={member.img}
              nombre={member.nombre}
              correo={member.correo}
              dpto={member.dpto}
              more={member.more}
              asignatura={member.asignatura}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
