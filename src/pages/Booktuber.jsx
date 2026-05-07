const Booktuber = () => {
  return (
    <div className="container contenedor px-5">
      <h2>Booktuber 2026</h2>
      <hr />
      <p>
        Bienvenidos al espacio de Booktuber. Aqui publicaremos informacion,
        bases y novedades del proyecto.
      </p>
      <a
        href="https://drive.google.com/drive/folders/15uYnaVYQnb90CXiYZCQLWvDoQMzmI0YP?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Ver bases y autorizacion
      </a>
      <div className="ratio ratio-16x9 mt-4">
        <iframe
          src="https://www.youtube.com/embed/x13t09GPuqc?si=dvwoGRoHQFzdbbnj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Booktuber;
