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
    img: mdiaz,
    nombre: "Milton Diaz",
    correo: "mdiaz@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 1ero Medio A",
    asignatura: "Formación Ciudadana e Historia del Presente",
  },
  {
    img: rbahamonde,
    nombre: "Romina Bahamonde ",
    correo: "rbahamonde@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 1ero Medio B",
    asignatura: "Educación Física y Salud",
  },
  {
    img: pbarrientos,
    nombre: "Patricia Barrientos",
    correo: "pbarrientos@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 1ero Medio C",

    asignatura:
      "Física – Ciencias para la Ciudadanía – FD Física – FD Ciencias de la Salud",
  },
  {
    img: cmansilla,
    nombre: "Carmen Gloria Mansilla",
    correo: "cmansilla@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 2do Medio A",
    asignatura: "-",
  },
  {
    img: mvargas,
    nombre: "María José Vargas",
    correo: "mvargas@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 2do Medio  B",
    asignatura: "Biología",
  },
  {
    img: cvidela,
    nombre: "Claudia Videla",
    correo: "cvidela@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 2do Medio C",
    asignatura:
      "Matemática, FD Límites, derivadas e integrales, FD Pensamiento Computacional y Programación",
  },
  {
    img: pnavea,
    nombre: "Paola Navea",
    correo: "pnavea@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 3ero Medio A",
    asignatura: "Música",
  },
  {
    img: saranguiz,
    nombre: "Samy Aránguiz ",
    correo: "saranguiz@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 3ero Medio B",
    asignatura: "Lengua y Literatura – Taller de Literatura",
  },
  {
    img: amorales,
    nombre: "Ángela Morales",
    correo: "amorales@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 3ero Medio C",
    asignatura: "Lenguaje",
  },

  {
    img: pbarria,
    nombre: "Paula Barría",
    correo: "pbarria@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 4to Medio A",
    asignatura: "Lengua y Literatura – Teatro – Simce",
  },

  {
    img: acancino,
    nombre: "Alex Cancino",
    correo: "acancino@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 4to Medio B",
    asignatura: "Matemática",
  },

  {
    img: jtoro,
    nombre: "Josué Toro",
    correo: "jtoro@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 4to Medio C",
    asignatura: "Historia – Filosofía",
  },
  {
    img: jfajardo,
    nombre: "Jessica Fajardo",
    correo: "jfajardo@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "",
    asignatura: "Inglés",
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

  {
    img: aneira,
    nombre: "Ana Maria Neira",
    correo: "aneira@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Matemática",
  },

  {
    img: nibarra,
    nombre: "Nelda Ibarra",
    correo: "nibarra@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "-",
    asignatura: "Inglés Idioma Extranjero",
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
    img: maburto,
    nombre: "Miguel Aburto",
    correo: "maburto@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Religión Católica",
  },
  {
    img: demoImage,
    nombre: "David Paillan",
    correo: "dpaillan@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Religión Evangélica",
  },
  {
    img: demoImage,
    nombre: "Javiera Morales",
    correo: "jmorales@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Música",
  },
];
