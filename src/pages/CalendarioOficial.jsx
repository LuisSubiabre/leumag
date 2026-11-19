import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import { Page, PageHeader, Section } from "../components/ui/Page";
import reuniones26 from "/images/reuniones26.png";
import "./CalendarioOficial.css";

const CALENDARIO_ID =
  "liceoexperimental.cl_v1vo40hg7ljnh1avc8tmlcnmf0%40group.calendar.google.com";
const CALENDARIO_EMBED = `https://calendar.google.com/calendar/embed?src=${CALENDARIO_ID}&ctz=America%2FPunta_Arenas`;

const CalendarioOficial = () => {
  return (
    <Page>
      <PageHeader
        icon={FaCalendarAlt}
        kicker="Información académica"
        title="Calendario oficial"
        lead="Revisa feriados, vacaciones, reuniones y las fechas clave del año escolar."
      >
        <a
          href={CALENDARIO_EMBED}
          target="_blank"
          rel="noopener noreferrer"
          className="lp-btn lp-btn--ghost calendario-header__btn"
        >
          Abrir en Google Calendar
          <FaExternalLinkAlt size={11} aria-hidden="true" />
        </a>
      </PageHeader>

      <Section id="reuniones" kicker="Apoderados" title="Reuniones 2026">
        <div className="lp-frame calendario-reuniones" data-reveal>
          <img src={reuniones26} alt="Calendario de reuniones de apoderados 2026" />
        </div>
      </Section>

      <Section id="institucional" kicker="Google Calendar" title="Calendario institucional">
        <div className="lp-frame" data-reveal>
          <iframe
            src={CALENDARIO_EMBED}
            title="Calendario Institucional"
            height="600"
            loading="lazy"
            className="calendario-embed"
          />
        </div>
      </Section>
    </Page>
  );
};

export default CalendarioOficial;
