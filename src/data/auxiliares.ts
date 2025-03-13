import demoImage from "../assets/img/funcionarios/demo.png";
import hortiz from "../assets/img/funcionarios/hortiz.png";
import mbahamonde from "../assets/img/funcionarios/mbahamonde.png";
import jsaldivia from "../assets/img/funcionarios/jsaldivia.png";
import svelasquez from "../assets/img/funcionarios/svelasquez.png";
import ereyes from "../assets/img/funcionarios/ereyes.png";
import gquinchen from "../assets/img/funcionarios/gquinchen.png";
export type Funcionario = {
  img: string;
  nombre: string;
  correo: string;
  dpto: string;
  more: string;
};

export const equipoAuxiliar: Funcionario[] = [
  {
    img: mbahamonde,
    nombre: "Manuel Bahamonde",
    correo: "mbahamonde@liceoexperimental.cl",
    dpto: "Auxiliar",
    more: "",
  },
  {
    img: hortiz,
    nombre: "Héctor Ortíz",
    correo: "hortiz@liceoexperimental.cl",
    dpto: "Auxiliar Apoyo de Mantenimiento",
    more: "",
  },
  {
    img: gquinchen,
    nombre: "Gloria Quinchen",
    correo: "gquinchen@liceoexperimental.cl",
    dpto: "Auxiliar",
    more: "",
  },
  {
    img: demoImage,
    nombre: "Carlos Ortega",
    correo: "cortega@liceoexperimental.cl",
    dpto: "Auxiliar Apoyo de Mantenimiento",
    more: "",
  },
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
  {
    img: svelasquez,
    nombre: "Sandra Velásquez",
    correo: "svelasquez@liceoexperimental.cl",
    dpto: "Auxiliar",
    more: "",
  },
];
