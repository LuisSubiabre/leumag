import demoImage from "../assets/img/funcionarios/demo.png";
import hoyarzun from "../assets/img/funcionarios/hoyarzun.png";
import cvargas from "../assets/img/funcionarios/cvargas.png";
import cvergara from "../assets/img/funcionarios/cvergara.png";
import lgomez from "../assets/img/funcionarios/lgomez.png";
import tguidipani from "../assets/img/funcionarios/tguidipani.png";
import ccardenas from "../assets/img/funcionarios/ccardenas.png";
import fperez from "../assets/img/funcionarios/fperez.png";
import jgonzalez from "../assets/img/funcionarios/jgonzalez.png";
import ncanio from "../assets/img/funcionarios/ncanio.png";
import iacuna from "../assets/img/funcionarios/iacuna.png";
import mmolina from "../assets/img/funcionarios/mmolina.png";
import rbarria from "../assets/img/funcionarios/rbarria.png";
import vsantana from "../assets/img/funcionarios/vsantana.png";
import mmercado from "../assets/img/funcionarios/mmercado.png";
import pespinoza from "../assets/img/funcionarios/pespinoza.png";
import vgarret from "../assets/img/funcionarios/vgarret.png";
import azamorano from "../assets/img/funcionarios/azamorano.png";
import movando from "../assets/img/funcionarios/movando.png";
import plemus from "../assets/img/funcionarios/plemus.png";
import mdiazbustos from "../assets/img/funcionarios/mdiazbustos.png";
import ymino from "../assets/img/funcionarios/ymino.png";
import gcontreras from "../assets/img/funcionarios/gcontreras.png";
import clara from "../assets/img/funcionarios/clara.png";
import jpfarias from "../assets/img/funcionarios/jpfarias.png";
import pdelgado from "../assets/img/funcionarios/pdelgado.png";
export type Funcionario = {
  img: string;
  nombre: string;
  correo: string;
  dpto: string;
  more: string;
  asignatura: string;
};

export const equipoBasica: Funcionario[] = [
  {
    img: vsantana,
    nombre: "Viviana Santana",
    correo: "vsantana@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 1ero Básico A",
    asignatura: "Generalista",
  },
  {
    img: cvergara,
    nombre: "Carolina Vergara",
    correo: "cvergara@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 1° Básico B",
    asignatura: "Generalista",
  },

  {
    img: hoyarzun,
    nombre: "Helda Oyarzún",
    correo: "hoyarzun@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 2do Básico A",
    asignatura: "Generalista",
  },
  {
    img: cvargas,
    nombre: "Catherine Vargas",
    correo: "cvargas@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 2do Básico B",
    asignatura: "Generalista – Tecnología",
  },
  {
    img: movando,
    nombre: "Mario Ovando",
    correo: "movando@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 3ero Básico A",
    asignatura: "Inglés",
  },
  {
    img: demoImage,
    nombre: "Claudio Flores",
    correo: "cflores@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 3ero Básico B",
    asignatura: "Lenguaje",
  },
  {
    img: tguidipani,
    nombre: "Tatiana Guidipani",
    correo: "tguidipani@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 4to Básico A",
    asignatura: "Educación Física",
  },
  {
    img: plemus,
    nombre: "Priscila Lemus",
    correo: "plemus@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 4to Básico B",
    asignatura: "Educación Física",
  },
  {
    img: jgonzalez,
    nombre: "Jonathan González",
    correo: "jgonzalez@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 5to Básico A",
    asignatura: "Lenguaje",
  },
  {
    img: ccardenas,
    nombre: "Carola Cárdenas",
    correo: "ccardenas@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 5to Básico B",
    asignatura: "Ciencias Naturales – Tecnología",
  },
  {
    img: clara,
    nombre: "Cecilia Lara",
    correo: "clara@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 6to Báscico A",
    asignatura: "Matemática",
  },
  {
    img: rbarria,
    nombre: "Romina Barría",
    correo: "rbarria@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 6to Básico B",
    asignatura: "Historia – Artes",
  },
  {
    img: demoImage,
    nombre: "Graciela Velásquez",
    correo: "gvelasquez@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 7mo Básico A",
    asignatura: "",
  },
  {
    img: ncanio,
    nombre: "Natalia Canio",
    correo: "ncanio@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 7mo Básico B",
    asignatura: "Matemática",
  },
  {
    img: pespinoza,
    nombre: "Pablo Espinoza",
    correo: "pespinoza@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 8vo Básico A",
    asignatura: "Inglés",
  },

  {
    img: demoImage,
    nombre: "Arnoldo Barrientos",
    correo: "abarrientosferes@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 8vo Básico A",
    asignatura: "Inglés",
  },

  {
    img: azamorano,
    nombre: "Araceli Zamorano",
    correo: "azamorano@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Lenguaje",
  },

  {
    img: iacuna,
    nombre: "Ingrid Acuña",
    correo: "iacuna@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Religión Evangélica",
  },

  {
    img: lgomez,
    nombre: "Luis Gómez",
    correo: "lgomez@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Música – Artes",
  },

  {
    img: mmolina,
    nombre: "Marlen Molina",
    correo: "mmolina@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Religión Católica",
  },

  {
    img: mdiazbustos,
    nombre: "Miguel Diaz",
    correo: "mdiazbustos@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Cs. Naturales",
  },

  {
    img: pdelgado,
    nombre: "Paola Delgado",
    correo: "pdelgado@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Matemática 3°y 4° Básico",
  },
  {
    img: demoImage,
    nombre: "Pedro Barrientos",
    correo: "pbarrientos@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Artes y Tecnología",
  },
];
