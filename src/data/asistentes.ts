import demoImage from "../assets/img/funcionarios/demo.png";
import avidal from "../assets/img/funcionarios/avidal.png";
import fgodoy from "../assets/img/funcionarios/fgodoy.png";
import mcarreno from "../assets/img/funcionarios/mcarreno.png";
import mhijerra from "../assets/img/funcionarios/mhijerra.png";
import rfarina from "../assets/img/funcionarios/rfarina.png";
import svera from "../assets/img/funcionarios/svera.png";
import vhernandez from "../assets/img/funcionarios/vhernandez.png";
import gbarria from "../assets/img/funcionarios/gbarria.png";
import rcisterna from "../assets/img/funcionarios/rcisterna.png";
import fgonzalez from "../assets/img/funcionarios/fgonzalez.png";
import fmancilla from "../assets/img/funcionarios/fmancilla.png";
import mrodriguez from "../assets/img/funcionarios/mrodriguez.png";
import pcardenas from "../assets/img/funcionarios/pcardenas.png";
import aalarcon from "../assets/img/funcionarios/aalarcon.png";
import nsanabria from "../assets/img/funcionarios/nsanabria.png";
import svillegas from "../assets/img/funcionarios/svillegas.png";
import ybahamonde from "../assets/img/funcionarios/ybahamonde.png";
import anaguelquin from "../assets/img/funcionarios/anaguelquin.png";
import mcortez from "../assets/img/funcionarios/mcortez.png";
import cramirez from "../assets/img/funcionarios/cramirez.png";
import amarquez from "../assets/img/funcionarios/amarquez.png";
import ssanchez from "../assets/img/funcionarios/ssanchez.png";
import aguerra from "../assets/img/funcionarios/aguerra.png";
import rahumada from "../assets/img/funcionarios/rahumada.png";
import mcastelblanco from "../assets/img/funcionarios/mcastelblanco.png";
import pparedes from "../assets/img/funcionarios/pparedes.png";
import mperanchiguay from "../assets/img/funcionarios/mperanchiguay.png";

export type Funcionario = {
  img: string;
  nombre: string;
  correo: string;
  dpto: string;
};

export const equipoAsistentes: Funcionario[] = [
  {
    img: aalarcon,
    nombre: "Andrea Alarcón",
    correo: "aalarcon@liceoexperimental.cl",
    dpto: "Secretaria Dirección",
  },
  {
    img: amarquez,
    nombre: "Andrea Márquez",
    correo: "amarquez@liceoexperimental.cl",
    dpto: "Técnico 2° Básico A",
  },
  {
    img: anaguelquin,
    nombre: "Andrea Naguelquín",
    correo: "anaguelquin@liceoexperimental.cl",
    dpto: "Encargada Tesorería",
  },
  {
    img: avidal,
    nombre: "Angela Vidal",
    correo: "avidal@liceoexperimental.cl",
    dpto: "Inspectora",
  },
  {
    img: aguerra,
    nombre: "Arielle Guerra",
    correo: "aguerra@liceoexperimental.cl",
    dpto: "Inspectora Parvulos",
  },

  {
    img: cramirez,
    nombre: "Carolina Ramírez",
    correo: "cramirez@liceoexperimental.cl",
    dpto: "Técnico 1° Básico A",
  },
  {
    img: rfarina,
    nombre: "Rodrigo Fariña",
    correo: "rfarina@liceoexperimental.cl",
    dpto: "TENS",
  },
  {
    img: demoImage,
    nombre: "Elizabeth Almonacid",
    correo: "ealmonacid@liceoexperimental.cl",
    dpto: "Técnico 2° Básico B",
  },
  {
    img: mcastelblanco,
    nombre: "María Angélica Castelblanco",
    correo: "mcastelblanco@liceoexperimental.cl",
    dpto: "Inspectora",
  },
  {
    img: fgodoy,
    nombre: "Filomena Godoy",
    correo: "fgodoy@liceoexperimental.cl",
    dpto: "Secretaria Dirección",
  },
  {
    img: fgonzalez,
    nombre: "Francisco González",
    correo: "fgonzalez@liceoexperimental.cl",
    dpto: "Encargado Logística",
  },
  {
    img: fmancilla,
    nombre: "Francisco Mancilla",
    correo: "fmancilla@liceoexperimental.cl",
    dpto: "Encargado Recaudación",
  },
  {
    img: gbarria,
    nombre: "Guillermo Barria",
    correo: "gbarria@liceoexperimental.cl",
    dpto: "Asistente RR.HH",
  },
  {
    img: demoImage,
    nombre: "Katherine Hechenleitner",
    correo: "khetchenleitner@liceoexperimental.cl",
    dpto: "Central de Apuntes",
  },
  {
    img: mcarreno,
    nombre: "Margarita Carreño",
    correo: "mcarreno@liceoexperimental.cl",
    dpto: "Inspectora",
  },
  {
    img: mcortez,
    nombre: "Maricela Cortéz",
    correo: "mcortez@liceoexperimental.cl",
    dpto: "Técnico 1° Básico B",
  },
  {
    img: mhijerra,
    nombre: "Ariela Hijerra",
    correo: "mhijerra@liceoexperimental.cl",
    dpto: "Inspectora",
  },
  {
    img: mrodriguez,
    nombre: "Miguel Rodríguez",
    correo: "mrodriguez@liceoexperimental.cl",
    dpto: "Encargado Remuneraciones",
  },
  {
    img: rahumada,
    nombre: "Ricardo Ahumada",
    correo: "rahumada@liceoexperimental.cl",
    dpto: "Inspector",
  },
  {
    img: pcardenas,
    nombre: "Paola Cárdenas",
    correo: "pcardenas@liceoexperimental.cl",
    dpto: "Inspectora",
  },
  {
    img: pparedes,
    nombre: "Paulina Paredes",
    correo: "pparedes@liceoexperimental.cl",
    dpto: "Psicologa Apoyo Convivencia Escolar",
  },
  {
    img: rcisterna,
    nombre: "Ronny Cisterna",
    correo: "rcisterna@liceoexperimental.cl",
    dpto: "Administrador Establecimiento",
  },
  {
    img: ssanchez,
    nombre: "Silvia Sánchez",
    correo: "ssanchez@liceoexperimental.cl",
    dpto: "Encargada CRA",
  },
  {
    img: svillegas,
    nombre: "Silvia Villegas",
    correo: "svillegas@liceoexperimental.cl",
    dpto: "Encargada Relaciones Laborales",
  },
  {
    img: svera,
    nombre: "Samantha Vera",
    correo: "svera@liceoexperimental.cl",
    dpto: "Recepción",
  },
  {
    img: vhernandez,
    nombre: "Viviana Hernández",
    correo: "vhernandez@liceoexperimental.cl",
    dpto: "Asistente Social",
  },
  {
    img: ybahamonde,
    nombre: "Yasna Bahamonde",
    correo: "ybahamonde@liceoexperimental.cl",
    dpto: "Encargada Adquisiciones",
  },
  {
    img: mperanchiguay,
    nombre: "Mayra Peranchiguay",
    correo: "mperanchiguay@liceoexperimental.cl",
    dpto: "Recepción",
    more: "",
  },
].sort((a, b) => a.nombre.split(" ")[1].localeCompare(b.nombre.split(" ")[1]));
