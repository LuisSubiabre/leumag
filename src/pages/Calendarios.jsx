const calendarios = [
  {
    titulo: "Calendario Institucional",
    src: "https://calendar.google.com/calendar/embed?src=liceoexperimental.cl_v1vo40hg7ljnh1avc8tmlcnmf0%40group.calendar.google.com&ctz=America%2FPunta_Arenas",
  },
  {
    titulo: "Lab. Computación",
    src: "https://calendar.google.com/calendar/embed?src=liceoexperimental.cl_fg6soror9dgpdr758c84sh8oo4%40group.calendar.google.com&ctz=America%2FPunta_Arenas",
  },
  {
    titulo: "Lab. Movil",
    src: "https://calendar.google.com/calendar/embed?src=liceoexperimental.cl_4jhrja733u2ca095o3ki4uuhrs%40group.calendar.google.com&ctz=America%2FPunta_Arenas",
  },
  {
    titulo: "Aula Magna",
    src: "https://calendar.google.com/calendar/embed?src=c_2872d2aabdf297a9d1c310e93cfcc698630cef01eae5714417e7da940617903d%40group.calendar.google.com&ctz=America%2FPunta_Arenas",
  },
  {
    titulo: "Biblioteca CRA",
    src: "https://calendar.google.com/calendar/embed?src=ssanchez%40liceoexperimental.cl&ctz=America%2FPunta_Arenas",
  },
];

const Calendarios = () => {
  return (
    <div className="container contenedor px-5">
      <h2>Calendarios</h2>
      <hr />
      {calendarios.map(({ titulo, src }) => (
        <section key={titulo} className="mb-5">
          <h3 className="h4 mb-3">{titulo}</h3>
          <iframe
            src={src}
            title={titulo}
            style={{ border: 0 }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            className="d-block mx-auto w-100"
          />
        </section>
      ))}
    </div>
  );
};

export default Calendarios;
