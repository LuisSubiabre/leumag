import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBullhorn,
  FaCalendarAlt,
  FaClipboardList,
  FaClock,
  FaFolderOpen,
  FaHandHoldingHeart,
  FaUserGraduate,
  FaUsers,
  FaStar,
  FaChalkboardTeacher,
} from "react-icons/fa";
import Posts from "./Posts";
import Documentos from "./Documentos";
import Externos from "./Externos";
import ComponentSae from "./sae";
import UltimosComunicados from "./UltimosComunicados";
import UltimosVideosScroll from "./UltimosVideosScroll";
import HomeModal from "./HomeModal";
import hero1 from "../assets/img/hero/1.png";
import hero2 from "../assets/img/hero/2.png";
import hero3 from "../assets/img/hero/3.png";
import hero4 from "../assets/img/hero/4.png";
import "./Home.css";

const SHOW_HOME_MODAL = false;
const HOME_MODAL = {
  title: "PAES",
  //youtubeId: "RHJzWcEYY9w",
  image: "/images/paes.png",
};

const ACCESOS_RAPIDOS = [
  {
    to: "/BecaVulnerabilidad",
    label: "Beca 2027",
    hint: "Postulación",
    icon: FaHandHoldingHeart,
    tone: "becas",
  },
  {
    to: "/Matricula",
    label: "Matrícula",
    hint: "Proceso 2026",
    icon: FaUserGraduate,
    tone: "matricula",
  },
  {
    to: "/Comunicados",
    label: "Comunicados",
    hint: "Avisos",
    icon: FaBullhorn,
    tone: "avisos",
  },
  {
    to: "/Horarios",
    label: "Horarios",
    hint: "Cursos",
    icon: FaClock,
    tone: "horarios",
  },
  {
    to: "/CalendarioOficial",
    label: "Calendario",
    hint: "Año escolar",
    icon: FaCalendarAlt,
    tone: "calendario",
  },
  {
    to: "/Evaluaciones",
    label: "Evaluaciones",
    hint: "Fechas",
    icon: FaClipboardList,
    tone: "evaluaciones",
  },
  {
    to: "/Materiales",
    label: "Materiales",
    hint: "Útiles",
    icon: FaFolderOpen,
    tone: "materiales",
  },
];

const NECESITAS = [
  {
    to: "/Horarios",
    title: "Horarios de clases",
    text: "Consulta los horarios de Enseñanza Básica y Media, actualizados para el año en curso.",
    cta: "Ver horarios",
    image: hero1,
  },
  {
    to: "/CalendarioOficial",
    title: "Calendario oficial",
    text: "Revisa feriados, vacaciones, reuniones y las fechas clave del año escolar.",
    cta: "Abrir calendario",
    image: hero2,
  },
  {
    to: "/Evaluaciones",
    title: "Calendario de evaluaciones",
    text: "Encuentra las fechas de pruebas y evaluaciones de cada nivel, en un solo lugar.",
    cta: "Ver evaluaciones",
    image: hero3,
  },
  {
    to: "/Materiales",
    title: "Listas de materiales",
    text: "Descarga las listas de útiles y materiales solicitados por curso.",
    cta: "Ver materiales",
    image: hero4,
  },
];

const COMUNIDAD = [
  {
    to: "/CentroDeAlumnos",
    label: "Centro de Estudiantes",
    text: "Representación y actividades de las y los estudiantes.",
    icon: FaUsers,
  },
  {
    to: "/CentroDePadres",
    label: "Centro de Padres",
    text: "Organización de apoderados y vida familiar del Liceo.",
    icon: FaUserGraduate,
  },
  {
    to: "/Acle",
    label: "ACLE / Talleres",
    text: "Deportes, arte y talleres de libre elección.",
    icon: FaStar,
  },
  {
    to: "/Estamentos",
    label: "Equipo",
    text: "Conoce a quienes hacen posible el Liceo.",
    icon: FaChalkboardTeacher,
  },
];

function Home() {
  const [modalShow, setModalShow] = useState(SHOW_HOME_MODAL);

  return (
    <div className="home-page">
      <section className="home-block home-block--access" aria-label="Accesos frecuentes">
        <div className="home-wrap">
          <nav className="home-access" aria-label="Accesos frecuentes">
            {ACCESOS_RAPIDOS.map(({ to, label, hint, icon: Icon, tone }) => (
              <Link
                key={to}
                to={to}
                className={`home-access__item home-access__item--${tone}`}
              >
                <span className="home-access__icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="home-access__text">
                  <strong>{label}</strong>
                  <small>{hint}</small>
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="home-block">
        <div className="home-wrap">
          <Posts />
        </div>
      </section>

      <section className="home-block home-block--muted">
        <div className="home-wrap">
          <UltimosComunicados />
        </div>
      </section>

      <section className="home-band home-band--ink">
        <div className="home-wrap home-band__inner">
          <p className="home-band__eyebrow">Nuestra identidad</p>
          <h2>La verdad, a través de la razón</h2>
          <p>
            Formamos niñas, niños y jóvenes de Magallanes con una educación
            humana y académica, para que sean un real aporte a la sociedad.
          </p>
          <Link to="/Nosotros" className="home-band__cta">
            Conocer el Liceo
            <FaArrowRight size={12} />
          </Link>
        </div>
      </section>

      <section className="home-block">
        <div className="home-wrap">
          <UltimosVideosScroll />
        </div>
      </section>

      <section className="home-band home-band--community">
        <div className="home-wrap">
          <p className="home-kicker">Comunidad</p>
          <h2 className="home-band__title">Somos más que la sala de clases</h2>
          <div className="home-community">
            {COMUNIDAD.map(({ to, label, text, icon: Icon }) => (
              <Link key={to} to={to} className="home-community__card">
                <span className="home-community__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{label}</h3>
                <p>{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block" aria-labelledby="necesitas-titulo">
        <div className="home-wrap">
          <div className="home-section-head home-section-head--center">
            <div>
              <p className="home-kicker">Información académica</p>
              <h2 id="necesitas-titulo">Todo lo que necesitas</h2>
            </div>
          </div>

          <div className="home-need">
            {NECESITAS.map((item, index) => (
              <article
                key={item.to}
                className={`home-need__row${
                  index % 2 === 1 ? " home-need__row--reverse" : ""
                }`}
              >
                <div className="home-need__copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link to={item.to} className="home-text-link">
                    {item.cta}
                    <FaArrowRight size={12} />
                  </Link>
                </div>
                <Link to={item.to} className="home-need__media" tabIndex={-1}>
                  <img src={item.image} alt="" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block home-block--muted">
        <div className="home-wrap">
          <Documentos showAllLink />
        </div>
      </section>

      <section className="home-block">
        <div className="home-wrap home-closing">
          <Externos />
          <ComponentSae />
        </div>
      </section>

      <HomeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={HOME_MODAL.title}
        image={HOME_MODAL.image}
        youtubeId={HOME_MODAL.youtubeId}
      />
    </div>
  );
}

export default Home;
