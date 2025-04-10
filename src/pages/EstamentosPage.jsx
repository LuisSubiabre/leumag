import { Usuarios } from "../components/Usuarios";
import { equipoDirectivo } from "../data/directivos.ts";
import { equipoParvulos } from "../data/parvulos.ts";
import { equipoBasica } from "../data/basica.ts";
import { equipoMedia } from "../data/media.ts";
import { equipoDocenteAdministrativo } from "../data/docentes.ts";
import { equipoAsistentes } from "../data/asistentes.ts";
import { equipoAuxiliar } from "../data/auxiliares.ts";
import { useState } from "react";
import { Col, Container, Row, Button, ButtonGroup } from "react-bootstrap";

const EstamentosPage = () => {
  const [activeSection, setActiveSection] = useState("directivo");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Ajuste para el espacio superior
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <Container className="contenedor my-6">
        <div
          className=" sticky-nav pt-3 pb-3"
          style={{ top: "60px", zIndex: 1020 }}
        >
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-2">
            <ButtonGroup className="flex-wrap">
              {[
                { id: "directivo", text: "Equipo Directivo" },
                { id: "parvularia", text: "Ed. Parvularia" },
                { id: "basica", text: "Ed. Básica" },
                { id: "media", text: "Ed. Media" },
                { id: "docentes", text: "Docentes Admin." },
                { id: "asistentes", text: "Asistentes" },
                { id: "mantencion", text: "Mantención" },
              ].map((section) => (
                <Button
                  key={section.id}
                  variant={
                    activeSection === section.id ? "primary" : "outline-primary"
                  }
                  onClick={() => scrollToSection(section.id)}
                  className="px-3 py-2"
                >
                  {section.text}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </div>

        <div id="directivo">
          <h1 className="display-4 mx-3 mb-4">Equipo Directivo</h1>
          <Row className="justify-content-center g-4">
            {equipoDirectivo.map((member, index) => (
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                className="d-flex justify-content-center"
                key={index}
              >
                <Usuarios
                  img={member.img}
                  nombre={member.nombre}
                  correo={member.correo}
                  dpto={member.dpto}
                  more={member.more}
                />
              </Col>
            ))}
          </Row>
        </div>

        <hr />

        <div id="parvularia">
          <h1 className="display-4 mx-3 mb-4">Educación Parvularia</h1>
          <Row className="justify-content-center g-4">
            {equipoParvulos.map((member, index) => (
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                className="d-flex justify-content-center"
                key={index}
              >
                <Usuarios
                  img={member.img}
                  nombre={member.nombre}
                  correo={member.correo}
                  dpto={member.dpto}
                  more={member.more}
                />
              </Col>
            ))}
          </Row>
        </div>

        <hr />

        <div id="basica">
          <h1 className="display-4 mx-3 mb-4">Educación Básica</h1>
          <Row className="justify-content-center g-4">
            {equipoBasica.map((member, index) => (
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                className="d-flex justify-content-center"
                key={index}
              >
                <Usuarios
                  img={member.img}
                  nombre={member.nombre}
                  correo={member.correo}
                  dpto={member.dpto}
                  more={member.more}
                  asignatura={member.asignatura}
                />
              </Col>
            ))}
          </Row>
        </div>

        <hr />

        <div id="media">
          <h1 className="display-4 mx-3 mb-4">Educación Media</h1>
          <Row className="justify-content-center g-4">
            {equipoMedia.map((member, index) => (
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                className="d-flex justify-content-center"
                key={index}
              >
                <Usuarios
                  img={member.img}
                  nombre={member.nombre}
                  correo={member.correo}
                  dpto={member.dpto}
                  more={member.more}
                  asignatura={member.asignatura}
                />
              </Col>
            ))}
          </Row>
        </div>

        <hr />

        <div id="docentes">
          <h1 className="display-4 mx-3 mb-4">Docentes Administrativos</h1>
          <Row className="justify-content-center g-4">
            {equipoDocenteAdministrativo.map((member, index) => (
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                className="d-flex justify-content-center"
                key={index}
              >
                <Usuarios
                  img={member.img}
                  nombre={member.nombre}
                  correo={member.correo}
                  dpto={member.dpto}
                  more={member.more}
                />
              </Col>
            ))}
          </Row>
        </div>

        <hr />

        <div id="asistentes">
          <h1 className="display-4 mx-3 mb-4">Asistentes de la Educación</h1>
          <Row className="justify-content-center g-4">
            {equipoAsistentes.map((member, index) => (
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                className="d-flex justify-content-center"
                key={index}
              >
                <Usuarios
                  img={member.img}
                  nombre={member.nombre}
                  correo={member.correo}
                  dpto={member.dpto}
                  more={member.more}
                />
              </Col>
            ))}
          </Row>
        </div>

        <hr />

        <div id="mantencion">
          <h1 className="display-4 mx-3 mb-4">Mantención y servicios</h1>
          <Row className="justify-content-center g-4">
            {equipoAuxiliar.map((member, index) => (
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                className="d-flex justify-content-center"
                key={index}
              >
                <Usuarios
                  img={member.img}
                  nombre={member.nombre}
                  correo={member.correo}
                  dpto={member.dpto}
                  more={member.more}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default EstamentosPage;
