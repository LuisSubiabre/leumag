import { Usuarios } from "./Usuarios";
import demoImage from "../assets/img/funcionarios/demo.png";
import jtrujillo from "../assets/img/funcionarios/jtrujillo.png";
import nibarra from "../assets/img/funcionarios/nibarra.png";
import acancino from "../assets/img/funcionarios/acancino.png";
import mcisternas from "../assets/img/funcionarios/mcisternas.png";
import arivas from "../assets/img/funcionarios/arivas.png";
import pbarrientos from "../assets/img/funcionarios/pbarrientos.png";
import cpardo from "../assets/img/funcionarios/cpardo.png";
import csoto from "../assets/img/funcionarios/csoto.png";
import mdiaz from "../assets/img/funcionarios/mdiaz.png";
import saranguiz from "../assets/img/funcionarios/saranguiz.png";
import aneira from "../assets/img/funcionarios/aneira.png";
import jfajardo from "../assets/img/funcionarios/jfajardo.png";
import pnavea from "../assets/img/funcionarios/pnavea.png";
import jtoro from "../assets/img/funcionarios/jtoro.png";
import pbarria from "../assets/img/funcionarios/pbarria.png";
import rbahamonde from "../assets/img/funcionarios/rbahamonde.png";
import { Row, Col, Container } from "react-bootstrap";

const docentes = [
  {
    img: mcisternas,
    nombre: "Manuel Cisternas Williams",
    correo: "mcisternas@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura:
      "Biología – Ciencias para la Ciudadanía – FD Biología Celular y Molecular – FD Biología de los Ecosistemas",
  },
  {
    img: arivas,
    nombre: "Alejandra Rivas Diaz",
    correo: "arivas@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 3° C",
    asignatura:
      "Química – Ciencias para la Ciudadanía – Ciencias de la Salud – FD Química",
  },
  {
    img: saranguiz,
    nombre: "Samy Letricia Aránguiz Aránguiz",
    correo: "saranguiz@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 1° B",
    asignatura: "Lengua y Literatura – Taller de Literatura",
  },
  {
    img: pbarria,
    nombre: "Paula Belén Barría Barría",
    correo: "pbarria@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 2° A",
    asignatura: "Lengua y Literatura – Teatro – Simce",
  },
  {
    img: acancino,
    nombre: "Alex Cancino Vásquez",
    correo: "acancino@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 2° B",
    asignatura: "Matemática",
  },
  {
    img: rbahamonde,
    nombre: "Romina Alejandra Bahamonde Galli",
    correo: "rbahamonde@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 3° B",
    asignatura: "Educación Física y Salud",
  },
  {
    img: jtoro,
    nombre: "Josué Toro Ojeda",
    correo: "jtoro@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 2° C",
    asignatura: "Historia – Filosofía",
  },
  {
    img: mdiaz,
    nombre: "Milton Diaz Saldivia",
    correo: "mdiaz@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 3° A",
    asignatura: "Formación Ciudadana e Historia del Presente",
  },
  {
    img: jfajardo,
    nombre: "Jessica Fajardo Cuiñas",
    correo: "jfajardo@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 1° C",
    asignatura: "Inglés",
  },
  {
    img: csoto,
    nombre: "Camila Soto Aguillar",
    correo: "csoto@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Religión Evangélica – Desarrollo Personal",
  },

  {
    img: aneira,
    nombre: "Ana Maria Neira Johnston",
    correo: "aneira@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Matemática",
  },

  {
    img: pbarrientos,
    nombre: "Patricia Barrientos",
    correo: "pbarrientos@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 4° B",
    asignatura:
      "Física – Ciencias para la Ciudadanía – FD Física – FD Ciencias de la Salud",
  },
  {
    img: pnavea,
    nombre: "Paola Navea",
    correo: "pnavea@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 1° A",
    asignatura: "—",
  },
  {
    img: nibarra,
    nombre: "Nelda Ibarra",
    correo: "nibarra@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 4° C",
    asignatura:
      "Inglés Idioma Extranjero Cursos 2° A, 2° B, 3° A, 3° B, 4° A, 4° B, 4° C",
  },
  {
    img: demoImage,
    nombre: "Denisse Bascuñán",
    correo: "dbascunan@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "—",
  },
  {
    img: demoImage,
    nombre: "Camila Contreras",
    correo: "ccontreras@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "—",
  },
  {
    img: jtrujillo,
    nombre: "Jorge Trujillo Emilqueo",
    correo: "jtrujillo@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Desarrollo Personal – Asistente de UTP",
  },

  {
    img: cpardo,
    nombre: "Carolina Pardo",
    correo: "cpardo@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Economía y Sociedad",
  },
  {
    img: demoImage,
    nombre: "Karina Martínez Miranda",
    correo: "kmartinezm@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Religion Católica",
  },
];

export const EquipoMedia = () => {
  return (
    <Container className="my-6">
      <hr />
      <h1 className="is-size-3 mx-3 mb-4">Educación Media</h1>
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
