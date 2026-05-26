import { Image } from "react-bootstrap";
import reuniones26 from "/images/reuniones26.png";

const CalendarioOficial = () => {
  const calendarioInstitucionalSrc =
    "https://calendar.google.com/calendar/embed?src=liceoexperimental.cl_v1vo40hg7ljnh1avc8tmlcnmf0%40group.calendar.google.com&ctz=America%2FPunta_Arenas";

  return (
    <div className="container contenedor px-5">
      <h2>Calendario Oficial</h2>
      <hr />

      <div className="mb-4">
        <Image
          src={reuniones26}
          alt="Reuniones 2026"
          fluid
          rounded
          style={{ maxWidth: 800, margin: "0 auto" }}
        />
      </div>

      <section className="mb-5">
        <h3 className="h4 mb-3">Calendario Institucional</h3>
        <iframe
          src={calendarioInstitucionalSrc}
          title="Calendario Institucional"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
          className="d-block mx-auto w-100"
        />
      </section>
    </div>
  );
};

export default CalendarioOficial;

