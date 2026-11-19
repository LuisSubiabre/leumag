import { FaEnvelope, FaUsers } from "react-icons/fa";
import { equipoDirectivo } from "../data/directivos.ts";
import { equipoParvulos } from "../data/parvulos.ts";
import { equipoBasica } from "../data/basica.ts";
import { equipoMedia } from "../data/media.ts";
import { equipoDocenteAdministrativo } from "../data/docentes.ts";
import { equipoAsistentes } from "../data/asistentes.ts";
import { equipoAuxiliar } from "../data/auxiliares.ts";
import { Page, PageHeader, PageNav, Section } from "../components/ui/Page";
import "./EstamentosPage.css";

const EQUIPOS = [
  { id: "directivo", nav: "Directivo", title: "Equipo Directivo", members: equipoDirectivo },
  { id: "parvularia", nav: "Ed. Parvularia", title: "Educación Parvularia", members: equipoParvulos },
  { id: "basica", nav: "Ed. Básica", title: "Educación Básica", members: equipoBasica },
  { id: "media", nav: "Ed. Media", title: "Educación Media", members: equipoMedia },
  { id: "docentes", nav: "Docentes Admin.", title: "Docentes Administrativos", members: equipoDocenteAdministrativo },
  { id: "asistentes", nav: "Asistentes", title: "Asistentes de la Educación", members: equipoAsistentes },
  { id: "mantencion", nav: "Mantención", title: "Mantención y servicios", members: equipoAuxiliar },
];

const NAV = EQUIPOS.map(({ id, nav }) => ({ id, label: nav }));

const esCorreo = (texto) => typeof texto === "string" && texto.includes("@");

function Integrante({ img, nombre, dpto, correo, more, asignatura }) {
  return (
    <article className="lp-card equipo-card">
      <img className="equipo-card__photo" src={img} alt="" loading="lazy" />
      <div className="equipo-card__body">
        <h3 className="equipo-card__name">{nombre}</h3>
        {dpto && <p className="equipo-card__role">{dpto}</p>}
        {(asignatura || more) && (
          <p className="equipo-card__extra">
            {[asignatura, more].filter(Boolean).join(" · ")}
          </p>
        )}
        {esCorreo(correo) ? (
          <a className="equipo-card__mail" href={`mailto:${correo}`}>
            <FaEnvelope aria-hidden="true" />
            <span>{correo}</span>
          </a>
        ) : (
          correo && <p className="equipo-card__extra">{correo}</p>
        )}
      </div>
    </article>
  );
}

const EstamentosPage = () => {
  return (
    <Page>
      <PageHeader
        icon={FaUsers}
        kicker="Institución"
        title="Nuestro equipo"
        lead="Directivos, docentes, asistentes y personal de servicio que hacen posible el Liceo cada día."
      />

      <PageNav items={NAV} label="Equipos del liceo" />

      {EQUIPOS.map(({ id, title, members }) => (
        <Section key={id} id={id} kicker={`${members.length} integrantes`} title={title}>
          <div className="equipo-grid" data-reveal>
            {members.map((member, index) => (
              <Integrante key={`${member.nombre}-${index}`} {...member} />
            ))}
          </div>
        </Section>
      ))}
    </Page>
  );
};

export default EstamentosPage;
