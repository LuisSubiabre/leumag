import { useEffect, useRef, useState } from "react";
import { FaCheck, FaEnvelope, FaRegCopy, FaUsers } from "react-icons/fa";
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

async function copiarAlPortapapeles(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    // Respaldo para navegadores sin Clipboard API (o sin HTTPS)
    const area = document.createElement("textarea");
    area.value = texto;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}

function Integrante({ img, nombre, dpto, correo, more, asignatura }) {
  const [estado, setEstado] = useState(null); // null | "copiado" | "error"
  const timer = useRef(0);
  const tieneCorreo = esCorreo(correo);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copiar = async () => {
    const ok = await copiarAlPortapapeles(correo);
    setEstado(ok ? "copiado" : "error");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setEstado(null), 2200);
  };

  const contenido = (
    <>
      <img className="equipo-card__photo" src={img} alt="" loading="lazy" />
      <span className="equipo-card__body">
        <span className="equipo-card__name">{nombre}</span>
        {dpto && <span className="equipo-card__role">{dpto}</span>}
        {(asignatura || more) && (
          <span className="equipo-card__extra">
            {[asignatura, more].filter(Boolean).join(" · ")}
          </span>
        )}
        {tieneCorreo ? (
          <span className={`equipo-card__mail${estado ? ` is-${estado}` : ""}`}>
            {estado === "copiado" ? (
              <>
                <FaCheck aria-hidden="true" />
                <span>Correo copiado</span>
              </>
            ) : estado === "error" ? (
              <span>No se pudo copiar</span>
            ) : (
              <>
                <FaEnvelope aria-hidden="true" />
                <span>{correo}</span>
                <FaRegCopy className="equipo-card__copy-icon" aria-hidden="true" />
              </>
            )}
          </span>
        ) : (
          correo && <span className="equipo-card__extra">{correo}</span>
        )}
      </span>
    </>
  );

  if (!tieneCorreo) {
    return <article className="lp-card equipo-card">{contenido}</article>;
  }

  return (
    <button
      type="button"
      className="lp-card equipo-card equipo-card--copy"
      onClick={copiar}
      title="Copiar correo"
      aria-label={`${nombre}, ${dpto ?? ""}. Copiar correo ${correo}`}
    >
      {contenido}
      <span className="visually-hidden" aria-live="polite">
        {estado === "copiado" ? `Correo de ${nombre} copiado` : ""}
      </span>
    </button>
  );
}

const EstamentosPage = () => {
  return (
    <Page>
      <PageHeader
        icon={FaUsers}
        kicker="Institución"
        title="Nuestro equipo"
        lead="Directivos, docentes, asistentes y personal de servicio que hacen posible el Liceo cada día. Haz clic en una tarjeta para copiar el correo."
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
