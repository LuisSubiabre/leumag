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
import cvidela from "../assets/img/funcionarios/cvidela.png";
import dbascunan from "../assets/img/funcionarios/dbascunan.png";
import mvargas from "../assets/img/funcionarios/mvargas.png";
import maburto from "../assets/img/funcionarios/maburto.png";
import csoto from "../assets/img/funcionarios/csoto.png";
import msaldivia from "../assets/img/funcionarios/msaldivia.png";
import amorales from "../assets/img/funcionarios/amorales.png";
import cmansilla from "../assets/img/funcionarios/cmansilla.png";
export type Funcionario = {
  img: string;
  nombre: string;
  correo: string;
  dpto: string;
  more: string;
  asignatura: string;
};

export const equipoMedia: Funcionario[] = [
  {
    img: cmansilla,
    nombre: "Carmen Gloria Mansilla",
    correo: "cmansilla@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 1° Medio A",
    asignatura: "-",
  },

  {
    img: cvidela,
    nombre: "Claudia Videla",
    correo: "cvidela@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 1° C",
    asignatura: "-",
  },
  {
    img: pnavea,
    nombre: "Paola Navea",
    correo: "pnavea@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 2° A",
    asignatura: "—",
  },
  {
    img: saranguiz,
    nombre: "Samy Aránguiz ",
    correo: "saranguiz@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 2° B",
    asignatura: "Lengua y Literatura – Taller de Literatura",
  },
  {
    img: jfajardo,
    nombre: "Jessica Fajardo",
    correo: "jfajardo@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 2° C",
    asignatura: "Inglés",
  },

  {
    img: pbarria,
    nombre: "Paula Barría",
    correo: "pbarria@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 3° A",
    asignatura: "Lengua y Literatura – Teatro – Simce",
  },

  {
    img: acancino,
    nombre: "Alex Cancino",
    correo: "acancino@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 3° B",
    asignatura: "Matemática",
  },

  {
    img: jtoro,
    nombre: "Josué Toro",
    correo: "jtoro@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 3° C",
    asignatura: "Historia – Filosofía",
  },
  {
    img: mdiaz,
    nombre: "Milton Diaz",
    correo: "mdiaz@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 4° A",
    asignatura: "Formación Ciudadana e Historia del Presente",
  },
  {
    img: rbahamonde,
    nombre: "Romina Bahamonde ",
    correo: "rbahamonde@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 4° B",
    asignatura: "Educación Física y Salud",
  },

  {
    img: arivas,
    nombre: "Alejandra Rivas",
    correo: "arivas@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 4° C",
    asignatura:
      "Química – Ciencias para la Ciudadanía – Ciencias de la Salud – FD Química",
  },

  // {
  //   img: csoto,
  //   nombre: "Camila Soto Aguillar",
  //   correo: "csoto@liceoexperimental.cl",
  //   dpto: "Educación Media",
  //   more: "—",
  //   asignatura: "Religión Evangélica – Desarrollo Personal",
  // },

  {
    img: aneira,
    nombre: "Ana Maria Neira",
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
    more: "-",
    asignatura:
      "Física – Ciencias para la Ciudadanía – FD Física – FD Ciencias de la Salud",
  },

  {
    img: nibarra,
    nombre: "Nelda Ibarra",
    correo: "nibarra@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "-",
    asignatura:
      "Inglés Idioma Extranjero Cursos 2° A, 2° B, 3° A, 3° B, 4° A, 4° B, 4° C",
  },
  {
    img: dbascunan,
    nombre: "Denisse Bascuñán",
    correo: "dbascunan@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Artes Visuales y Tecnología - FD Diseño Arquitectura y Artes.",
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
    nombre: "Jorge Trujillo",
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
    img: msaldivia,
    nombre: "María Saldivia",
    correo: "msaldivia@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Pensamiento Computacional y Programación",
  },
  {
    img: mvargas,
    nombre: "María José Vargas",
    correo: "mvargas@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Biología",
  },
  {
    img: maburto,
    nombre: "Miguel Aburto",
    correo: "maburto@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Religión Católica",
  },
  {
    img: csoto,
    nombre: "Camila Soto",
    correo: "csoto@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Religión Evangélica",
  },
  {
    img: amorales,
    nombre: "Ángela Morales",
    correo: "amorales@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Leguaje",
  },
];
