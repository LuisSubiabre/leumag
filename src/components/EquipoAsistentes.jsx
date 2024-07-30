import React from "react";
import { Usuarios } from "./Usuarios";
import demoImage from '../assets/img/funcionarios/demo.png';
import aacevedo from '../assets/img/funcionarios/aacevedo.png';
import avidal from '../assets/img/funcionarios/avidal.png';
import fgodoy from '../assets/img/funcionarios/fgodoy.png';
import mcarreno from '../assets/img/funcionarios/mcarreno.png';
import mhijerra from '../assets/img/funcionarios/mhijerra.png';
import rfarina from '../assets/img/funcionarios/rfarina.png';
import rmartinez from '../assets/img/funcionarios/rmartinez.png';
import svera from '../assets/img/funcionarios/svera.png';
import vhernandez from '../assets/img/funcionarios/vhernandez.png';
import gbarria from '../assets/img/funcionarios/gbarria.png';
import rcisterna from '../assets/img/funcionarios/rcisterna.png';
import fgonzalez from '../assets/img/funcionarios/fgonzalez.png';
import fmancilla from '../assets/img/funcionarios/fmancilla.png';
import mrodriguez from '../assets/img/funcionarios/mrodriguez.png';
import rgarrido from '../assets/img/funcionarios/rgarrido.png';
import pcardenas from '../assets/img/funcionarios/pcardenas.png';
import aalarcon from '../assets/img/funcionarios/aalarcon.png';
import nsanabria from '../assets/img/funcionarios/nsanabria.png';
import ecastillo from '../assets/img/funcionarios/ecastillo.png';
import svillegas from '../assets/img/funcionarios/svillegas.png';
import ybahamonde from '../assets/img/funcionarios/ybahamonde.png';
import anaguelquin from '../assets/img/funcionarios/anaguelquin.png';

const asistentes = [
  {
    img: aacevedo,
    nombre: "Andrea Acevedo",
    correo: "aacevedo@liceoexperimental.cl",
    dpto: "Inspector"
  },
  {
    img: aalarcon,
    nombre: "Andrea Alarcón",
    correo: "aalarcon@liceoexperimental.cl",
    dpto: "Inspector"
  },
  {
    img: ybahamonde,
    nombre: "Yasna Bahamonde",
    correo: "ybahamonde@liceoexperimental.cl",
    dpto: "Encargada Adquisiciones"
  },
  {
    img: gbarria,
    nombre: "Guillermo Barria",
    correo: "gbarria@liceoexperimental.cl",
    dpto: "Asistente RR.HH"
  },
  {
    img: pcardenas,
    nombre: "Paola Cárdenas",
    correo: "pcardenas@liceoexperimental.cl",
    dpto: "Inspectora"
  },
  {
    img: mcarreno,
    nombre: "Margarita Carreño",
    correo: "mcarreno@liceoexperimental.cl",
    dpto: "Inspectora"
  },
  {
    img: ecastillo,
    nombre: "Elizabeth Castillo",
    correo: "ecastillo@liceoexperimental.cl",
    dpto: "Inspectora"
  },
  {
    img: rcisterna,
    nombre: "Ronny Cisterna",
    correo: "rcisterna@liceoexperimental.cl",
    dpto: "Administrador Establecimiento"
  },
  {
    img: rfarina,
    nombre: "Rodrigo Fariña",
    correo: "rfariña@liceoexperimental.cl",
    dpto: "TENS"
  },
  {
    img: rgarrido,
    nombre: "Rosa Garrido",
    correo: "rgarrido@liceoexperimental.cl",
    dpto: "Secretaria Dirección"
  },
  {
    img: fgodoy,
    nombre: "Filomena Godoy",
    correo: "fgodoy@liceoexperimental.cl",
    dpto: "Secretaria Dirección"
  },
  {
    img: fgonzalez,
    nombre: "Francisco González",
    correo: "fgonzalez@liceoexperimental.cl",
    dpto: "Encargado Logística"
  },
  {
    img: demoImage,
    nombre: "Katherine Hechenleitner",
    correo: "khetchenleitner@liceoexperimental.cl",
    dpto: "Central de Apuntes"
  },
  {
    img: vhernandez,
    nombre: "Viviana Hernández",
    correo: "vhernandez@liceoexperimental.cl",
    dpto: "Asistente Social"
  },
  {
    img: mhijerra,
    nombre: "Ariela Hijerra",
    correo: "mhijerra@liceoexperimental.cl",
    dpto: "Inspectora"
  },
  {
    img: fmancilla,
    nombre: "Francisco Mancilla",
    correo: "fmancilla@liceoexperimental.cl",
    dpto: "Encargado Recaudación"
  },
  {
    img: rmartinez,
    nombre: "Rosa Martínez",
    correo: "rmartinez@liceoexperimental.cl",
    dpto: "Psicóloga"
  },
  {
    img: anaguelquin,
    nombre: "Andrea Naguelquín",
    correo: "anaguelquin@liceoexperimental.cl",
    dpto: "Encargada Tesorería"
  },
  {
    img: mrodriguez,
    nombre: "Miguel Rodríguez",
    correo: "mrodriguez@liceoexperimental.cl",
    dpto: "Encargado Remuneraciones"
  },
  {
    img: nsanabria,
    nombre: "Ninoska Sanabria",
    correo: "nsanabria@liceoexperimental.cl",
    dpto: "Inspectora"
  },
  {
    img: demoImage,
    nombre: "Silvia Sánchez",
    correo: "ssanchez@liceoexperimental.cl",
    dpto: "Encargada CRA"
  },
  {
    img: svera,
    nombre: "Samantha Vera",
    correo: "svera@liceoexperimental.cl",
    dpto: "Portería"
  },
  {
    img: avidal,
    nombre: "Angela Vidal",
    correo: "avidal@liceoexperimental.cl",
    dpto: "Inspectora"
  },
  {
    img: svillegas,
    nombre: "Silvia Villegas",
    correo: "svillegas@liceoexperimental.cl",
    dpto: "Encargada Relaciones Laborales"
  }
];

export const EquipoAsistentes = (props) => {
  return (
    <div className="container my-6">
      <h1 className="display-4 mx-3 mb-4">Asistentes de la Educación</h1>
      <div className="row">
        {asistentes.map((member, index) => (
          <div className="col my-2" key={index}>
            <Usuarios
              img={member.img}
              nombre={member.nombre}
              correo={member.correo}
              dpto={member.dpto}
            />
          </div>
        ))}
      </div>
    </div>


  );
};
