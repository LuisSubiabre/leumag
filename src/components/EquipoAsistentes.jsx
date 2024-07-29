import React from "react";
import { Usuarios } from "./Usuarios";
import demoImage from '../assets/img/funcionarios/demo.png';

const asistentes = [
  {
    img: demoImage,
    nombre: "Andrea Acevedo",
    correo: "aacevedo@liceoexperimental.cl",
    dpto: "Inspector"
  },
  {
    img: demoImage,
    nombre: "Andrea Alarcón",
    correo: "aalarcon@liceoexperimental.cl",
    dpto: "Inspector"
  },
  {
    img: demoImage,
    nombre: "Yasna Bahamonde",
    correo: "ybahamonde@liceoexperimental.cl",
    dpto: "Encargada Adquisiciones"
  },
  {
    img: demoImage,
    nombre: "Guillermo Barria",
    correo: "gbarria@liceoexperimental.cl",
    dpto: "Asistente RR.HH"
  },
  {
    img: demoImage,
    nombre: "Paola Cárdenas",
    correo: "pcardenas@liceoexperimental.cl",
    dpto: "Inspectora"
  },
  {
    img: demoImage,
    nombre: "Margarita Carreño",
    correo: "mcarreno@liceoexperimental.cl",
    dpto: "Inspectora"
  },
  {
    img: demoImage,
    nombre: "Elizabeth Castillo",
    correo: "ecastillo@liceoexperimental.cl",
    dpto: "Inspectora"
  },
  {
    img: demoImage,
    nombre: "Ronny Cisterna",
    correo: "rcisterna@liceoexperimental.cl",
    dpto: "Administrador Establecimiento"
  },
  {
    img: demoImage,
    nombre: "Rodrigo Fariña",
    correo: "rfariña@liceoexperimental.cl",
    dpto: "TENS"
  },
  {
    img: demoImage,
    nombre: "Rosa Garrido",
    correo: "rgarrido@liceoexperimental.cl",
    dpto: "Secretaria Dirección"
  },
  {
    img: demoImage,
    nombre: "Filomena Godoy",
    correo: "fgodoy@liceoexperimental.cl",
    dpto: "Secretaria Dirección"
  },
  {
    img: demoImage,
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
    img: demoImage,
    nombre: "Viviana Hernández",
    correo: "vhernandez@liceoexperimental.cl",
    dpto: "Asistente Social"
  },
  {
    img: demoImage,
    nombre: "Ariela Hijerra",
    correo: "mhijerra@liceoexperimental.cl",
    dpto: "Inspectora"
  },
  {
    img: demoImage,
    nombre: "Francisco Mancilla",
    correo: "fmancilla@liceoexperimental.cl",
    dpto: "Encargado Recaudación"
  },
  {
    img: demoImage,
    nombre: "Rosa Martínez",
    correo: "rmartinez@liceoexperimental.cl",
    dpto: "Psicóloga"
  },
  {
    img: demoImage,
    nombre: "Andrea Naguelquín",
    correo: "anaguelquin@liceoexperimental.cl",
    dpto: "Encargada Tesorería"
  },
  {
    img: demoImage,
    nombre: "Miguel Rodríguez",
    correo: "mrodriguez@liceoexperimental.cl",
    dpto: "Encargado Remuneraciones"
  },
  {
    img: demoImage,
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
    img: demoImage,
    nombre: "Samantha Vera",
    correo: "svera@liceoexperimental.cl",
    dpto: "Portería"
  },
  {
    img: demoImage,
    nombre: "Angela Vidal",
    correo: "avidal@liceoexperimental.cl",
    dpto: "Inspectora"
  },
  {
    img: demoImage,
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
