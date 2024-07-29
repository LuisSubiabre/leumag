import React from "react";
import { Usuarios } from "./Usuarios";
import demoImage from '../assets/img/funcionarios/demo.png';

const docentes = [
  {
    img: demoImage,
    nombre: "Victoria Garret",
    correo: "vgarret@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 1° Básico A",
    asignatura: "Generalista"
  },
  {
    img: demoImage,
    nombre: "Carolina Vergara",
    correo: "cvergara@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 1° Básico B",
    asignatura: "Generalista"
  },
  {
    img: demoImage,
    nombre: "Helda Oyarzún",
    correo: "hoyarzun@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 2° Básico A",
    asignatura: "Generalista"
  },
  {
    img: demoImage,
    nombre: "Catherine Vargas",
    correo: "cvargas@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 2° Básico B",
    asignatura: "Generalista – Tecnología"
  },
  {
    img: demoImage,
    nombre: "Mario Ovando",
    correo: "movando@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 3° Básico A",
    asignatura: "Inglés"
  },
  {
    img: demoImage,
    nombre: "Katherine Araya",
    correo: "karaya@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 3° Básico B",
    asignatura: "Matemática"
  },
  {
    img: demoImage,
    nombre: "Tatiana Guidipani",
    correo: "tguidipani@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 4° Básico A",
    asignatura: "Educación Física"
  },
  {
    img: demoImage,
    nombre: "Priscila Lemus",
    correo: "plemues@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 4° Básico B",
    asignatura: "Educación Física"
  },
  {
    img: demoImage,
    nombre: "Jonathan González",
    correo: "jgonzalez@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 5° Básico A",
    asignatura: "Lenguaje"
  },
  {
    img: demoImage,
    nombre: "Carola Cárdenas",
    correo: "ccardenas@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 5° Básico B",
    asignatura: "Ciencias Naturales – Tecnología"
  },
  {
    img: demoImage,
    nombre: "Pablo Espinoza",
    correo: "pespinoza@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 6° Básico A",
    asignatura: "Inglés"
  },
  {
    img: demoImage,
    nombre: "Viviana Santana",
    correo: "vsantana@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 6° Básico B",
    asignatura: "Artes – Tecnología"
  },
  {
    img: demoImage,
    nombre: "Araceli Zamorano",
    correo: "azamorano@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 7° Básico A",
    asignatura: "Lenguaje"
  },
  {
    img: demoImage,
    nombre: "Natalia Canio",
    correo: "ncanio@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 7° Básico B",
    asignatura: "Matemática"
  },
  {
    img: demoImage,
    nombre: "Fredy Pérez",
    correo: "fperez@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 8° Básico A",
    asignatura: "Educación Física"
  },
  {
    img: demoImage,
    nombre: "Cecilia Lara",
    correo: "clara@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "Jefatura: 8° Básico B",
    asignatura: "Matemática"
  },
  {
    img: demoImage,
    nombre: "Ingrid Acuña",
    correo: "iacuna@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Religión Evangélica"
  },
  {
    img: demoImage,
    nombre: "Romina Barría",
    correo: "rbarria@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Historia – Artes"
  },
  {
    img: demoImage,
    nombre: "Luis Gómez",
    correo: "lgomez@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Música – Artes"
  },
  {
    img: demoImage,
    nombre: "Macarena Gutiérrez",
    correo: "mlopez@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Lenguaje"
  },
  {
    img: demoImage,
    nombre: "Marlen Molina",
    correo: "mmolina@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Religión Católica"
  },
  {
    img: demoImage,
    nombre: "Rosio Ruiz",
    correo: "rruiz@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Inglés"
  },
  {
    img: demoImage,
    nombre: "Fernanda Vera",
    correo: "fvera@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Historia"
  },
  {
    img: demoImage,
    nombre: "Miguel Diaz",
    correo: "mdiazbustos@liceoexperimental.cl",
    dpto: "Educación Básica",
    more: "",
    asignatura: "Cs. Naturales"
  }
];

export const EquipoBasica = () => {
  return (
    <div className="container my-6">
      <h1 className="display-4 mx-3 mb-4">Educación Básica</h1>
      <div className="row">
        {docentes.map((member, index) => (
          <div className="col my-2" key={index}>
            <Usuarios
              img={member.img}
              nombre={member.nombre}
              correo={member.correo}
              dpto={member.dpto}
              more={member.more}
              asignatura={member.asignatura}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
