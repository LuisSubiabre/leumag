import jvaldes from "../assets/img/funcionarios/jvaldes.png";
import caraneda from "../assets/img/funcionarios/caraneda.png";
import mlopez from "../assets/img/funcionarios/mlopez.png";
import jtrujillo from "../assets/img/funcionarios/jtrujillo.png";
import rcontreras from "../assets/img/funcionarios/rcontreras.png";
import mcalvarado from "../assets/img/funcionarios/mcalvarado.png";
import plemus from "../assets/img/funcionarios/plemus.png";
import lsubiabre from "../assets/img/funcionarios/lsubiabre.png";
import lbarria from "../assets/img/funcionarios/lbarria.png";
export type Funcionario = {
  img: string;
  nombre: string;
  correo: string;
  dpto: string;
  more: string;
};

export const equipoDocenteAdministrativo: Funcionario[] = [
  {
    img: lbarria,
    nombre: "Luz Barría",
    correo: "lbarria@liceoexperimental.cl",
    dpto: "Coordinadora Ciclo Educación Parvularia",
    more: "",
  },

  {
    img: mcalvarado,
    nombre: "Maria Cecilia Alvarado",
    correo: "mcalvarado@liceoexperimental.cl",
    dpto: "Asistente U.T.P. Ens. Básica",
    more: "",
  },
  {
    img: caraneda,
    nombre: " Carlos Araneda ",
    correo: "caraneda@liceoexperimental.cl",
    dpto: "Asistente U.T.P. Ens. Básica",
    more: "",
  },
  {
    img: mlopez,
    nombre: "Mariana López",
    correo: "mlopez@liceoexperimental.cl",
    dpto: "Asistente U.T.P. Ens. Media",
    more: "",
  },
  {
    img: jvaldes,
    nombre: "Janet Valdés",
    correo: "jvaldes@liceoexperimental.cl",
    dpto: "Coordinación CRA",
    more: "",
  },
  {
    img: jtrujillo,
    nombre: "Jorge Trujillo",
    correo: "jtrujillo@liceoexperimental.cl",
    dpto: "Asistente U.T.P. Ens. Media",
    more: "",
  },
  {
    img: rcontreras,
    nombre: "Ruth Contreras",
    correo: "rcontreras@liceoexperimental.cl",
    dpto: "Educadora Diferencial",
    more: "",
  },
  {
    img: plemus,
    nombre: "Priscila Lemus",
    correo: "plemus@liceoexperimental.cl",
    dpto: "Coordinación ACLE",
    more: "",
  },
  {
    img: lsubiabre,
    nombre: "Luis Subiabre",
    correo: "lsubiabre@liceoexperimental.cl",
    dpto: "Coordinación Tecnológica",
    more: "",
  },
];
