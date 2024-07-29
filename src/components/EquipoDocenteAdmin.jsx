import React from "react";
import { Usuarios } from "./Usuarios";
import demoImage from '../assets/img/funcionarios/demo.png';

const docentes = [
  {
    img: demoImage,
    nombre: "Janet Valdés",
    correo: "jvaldes@liceoexperimental.cl",
    dpto: "Coordinación CRA",
    more: "",
  },
  {
    img: demoImage,
    nombre: "Maria Cecilia Alvarado",
    correo: "mcalvarado@liceoexperimental.cl",
    dpto: "Asistente U.T.P. Ens. Básica",
    more: "",
  },
  {
    img: demoImage,
    nombre: " Carlos Araneda ",
    correo: "caraneda@liceoexperimental.cl",
    dpto: "Asistente U.T.P. Ens. Básica",
    more: "",
  },
  {
    img: demoImage,
    nombre: "Mariana López",
    correo: "mlopez@liceoexperimental.cl",
    dpto: "Asistente U.T.P. Ens. Media",
    more: "",
  },
  {
    img: demoImage,
    nombre: "Jorge Trujillo",
    correo: "jtrujillo@liceoexperimental.cl",
    dpto: "Asistente U.T.P. Ens. Media",
    more: "",
  },
  {
    img: demoImage,
    nombre: "Priscila Lemus",
    correo: "plemus@liceoexperimental.cl",
    dpto: "Coordinación ACLE",
    more: "",
  }
  ,
  {
    img: demoImage,
    nombre: "Luis Subiabre",
    correo: "lsubiabre@liceoexperimental.cl",
    dpto: "Coordinación Tecnológica",
    more: "",
  }
];

export const EquipoDocenteAdmin = () => {
  return (
    <div className="container my-6">
      <h1 className="display-4 mx-3 mb-4">Docentes Administrativos</h1>
      <div className="row">
        {docentes.map((member, index) => (
          <div className="col my-2" key={index}>
            <Usuarios
              img={member.img}
              nombre={member.nombre}
              correo={member.correo}
              dpto={member.dpto}
              more={member.more}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
