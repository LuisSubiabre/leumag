import demoImage from "../assets/img/funcionarios/demo.png";
import lbarria from "../assets/img/funcionarios/lbarria.png";
import tcardenas from "../assets/img/funcionarios/tcardenas.png";
import msolis from "../assets/img/funcionarios/msolis.png";
import dandrade from "../assets/img/funcionarios/dandrade.png";
import nrodriguez from "../assets/img/funcionarios/nrodriguez.png";
import jvenegas from "../assets/img/funcionarios/jvenegas.png";
import abarrientos from "../assets/img/funcionarios/abarrientos.png";
import pnunez from "../assets/img/funcionarios/pnunez.png";
import ffigueroa from "../assets/img/funcionarios/ffigueroa.png";
import milnao from "../assets/img/funcionarios/milnao.png";
import tguidipani from "../assets/img/funcionarios/tguidipani.png";
import pespinoza from "../assets/img/funcionarios/pespinoza.png";

export type Funcionario = {
  img: string;
  nombre: string;
  correo: string;
  dpto: string;
  more: string;
};

export const equipoParvulos: Funcionario[] = [
  {
    img: lbarria,
    nombre: "Luz Barría",
    correo: "lbarria@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Coordinadora Ciclo Educación Parvularia",
  },

  {
    img: msolis,
    nombre: "Maria José Solís",
    correo: "msolis@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT1 A",
  },
  {
    img: demoImage,
    nombre: "Marianela Herrera",
    correo: "mherrera@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT1 B",
  },
  {
    img: milnao,
    nombre: "Marta Ilnao",
    correo: "milnao@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT2 A",
  },

  {
    img: tcardenas,
    nombre: "Teresa Cárdenas",
    correo: "tcardenas@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT2 B",
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
    img: abarrientos,
    nombre: "Alejandra Barrientos",
    correo: "abarrientos@liceoexperimental.cl",
    dpto: "Técnico en Educación Parvularia",
    more: "NT 2A",
  },
  {
    img: jvenegas,
    nombre: "Jaqueline Venegas",
    correo: "jvenegas@liceoexperimental.cl",
    dpto: "Técnico en Educación Parvularia",
    more: "NT 2B",
  },
  {
    img: pespinoza,
    nombre: "Pablo Espinoza",
    correo: "pespinoza@liceoexperimental.cl",
    dpto: "Técnico en Educación Parvularia",
    more: "Inglés",
  },
  {
    img: ffigueroa,
    nombre: "Franco Figueroa",
    correo: "ffigueroa@liceoexperimental.cl",
    dpto: "Profesor Taller Músical",
    more: "NT 1 y NT 2",
  },

  {
    img: tguidipani,
    nombre: "Tatiana Guidipani",
    correo: "tguidipani@liceoexperimental.cl",
    dpto: "Profesora Taller Psicomotricidad",
    more: "NT 1 y NT 2",
  },

  {
    img: demoImage,
    nombre: "Karen Mariqueo",
    correo: "kmariqueo@liceoexperimental.cl",
    dpto: "Inspectora Ciclo Educación Parvularia",
    more: "",
  },
];
