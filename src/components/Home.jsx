import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaBullhorn,
  FaCalendarAlt,
  FaClipboardList,
  FaClock,
  FaFolderOpen,
  FaUserGraduate,
} from "react-icons/fa";
import Posts from "./Posts";
import NoticiasCompactas from "./NoticiasCompactas";
import Documentos from "./Documentos";
import Externos from "./Externos";
import ComponentSae from "./sae";
import UltimosComunicados from "./UltimosComunicados";
import UltimosVideosScroll from "./UltimosVideosScroll";
import "./Home.css";

const ACCESOS_RAPIDOS = [
  {
    to: "/Matricula",
    label: "Matrícula",
    icon: FaUserGraduate,
    tone: "matricula",
    featured: true,
  },
  {
    to: "/Comunicados",
    label: "Comunicados",
    icon: FaBullhorn,
    tone: "avisos",
  },
  {
    to: "/Horarios",
    label: "Horarios",
    icon: FaClock,
    tone: "horarios",
  },
  {
    to: "/CalendarioOficial",
    label: "Calendario",
    icon: FaCalendarAlt,
    tone: "calendario",
  },
  {
    to: "/Evaluaciones",
    label: "Evaluaciones",
    icon: FaClipboardList,
    tone: "evaluaciones",
  },
  {
    to: "/Materiales",
    label: "Materiales",
    icon: FaFolderOpen,
    tone: "materiales",
  },
];

function Home() {
  return (
    <div className="home-page">
      <Container fluid className="home-page__container">
        <section className="home-welcome" aria-labelledby="home-welcome-title">
          <div className="home-welcome__top">
            <div className="home-welcome__content">
              <p className="home-welcome__eyebrow">Familia LEUMAG</p>
              <h2 id="home-welcome-title" className="home-welcome__title">
                Todo lo importante, en un solo lugar
              </h2>
              <p className="home-welcome__text">
                Accesos frecuentes, noticias y comunicados para apoderados.
              </p>
            </div>
          </div>

          <nav className="home-quick-links" aria-label="Accesos frecuentes">
            {ACCESOS_RAPIDOS.map(({ to, label, icon: Icon, tone, featured }) => (
              <Link
                key={to}
                to={to}
                className={`home-quick-link home-quick-link--${tone}${
                  featured ? " home-quick-link--featured" : ""
                }`}
              >
                <span className="home-quick-link__icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="home-quick-link__label">{label}</span>
              </Link>
            ))}
          </nav>
        </section>

        <Row className="home-layout g-4">
          <Col lg={8} className="order-2 order-lg-1">
            <section className="home-panel home-panel--news">
              <Posts />
            </section>

            <section className="home-panel home-panel--archive mt-4">
              <NoticiasCompactas />
            </section>

            <section className="home-panel home-panel--docs mt-4">
              <Documentos />
            </section>
          </Col>

          <Col lg={4} className="order-1 order-lg-2">
            <div className="home-sidebar d-lg-none">
              <section className="home-panel home-panel--aside">
                <UltimosComunicados />
              </section>
              <section className="home-panel home-panel--aside mt-3">
                <Externos />
              </section>
              <section className="home-panel home-panel--aside mt-3">
                <ComponentSae />
              </section>
            </div>

            <aside className="home-sidebar home-sidebar--sticky d-none d-lg-block">
              <section className="home-panel home-panel--aside">
                <UltimosComunicados />
              </section>
              <section className="home-panel home-panel--aside mt-3">
                <UltimosVideosScroll />
              </section>
              <section className="home-panel home-panel--aside mt-3">
                <Externos />
              </section>
              <section className="home-panel home-panel--aside mt-3">
                <ComponentSae />
              </section>
            </aside>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
