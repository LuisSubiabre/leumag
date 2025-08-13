import { useState, useEffect, useCallback } from "react";
import { scrapeNoticias } from "../services/scrapingService";
import { Row, Col, Card, Spinner, Button } from "react-bootstrap";

const NoticiasScraper = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const truncateText = (text, maxLength = 60) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const obtenerNoticias = useCallback(async () => {
    try {
      setLoading(true);
      const data = await scrapeNoticias();
      setNoticias(data);
      setError(null);
    } catch (err) {
      setError(
        "No se pudieron cargar las noticias. Por favor, intente nuevamente más tarde."
      );
      setNoticias([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    obtenerNoticias();
    const intervalo = setInterval(() => {
      obtenerNoticias();
    }, 5 * 60 * 1000);
    return () => clearInterval(intervalo);
  }, [obtenerNoticias]);

  const totalPages = Math.ceil(noticias.length / 2);
  const currentNoticias = noticias.slice(
    currentPage * 2,
    (currentPage + 1) * 2
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  if (loading && noticias.length === 0) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "30vh" }}
      >
        <div className="text-center">
          <Spinner
            animation="border"
            role="status"
            style={{ color: "#007bff", width: "2rem", height: "2rem" }}
          >
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
          <p className="mt-2" style={{ fontSize: "0.9rem" }}>
            Cargando noticias...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-3 bg-red-50 rounded-lg">
        <p className="text-danger mb-0" style={{ fontSize: "0.85rem" }}>
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="position-relative">
      <Row className="g-2">
        {noticias.length === 0 ? (
          <div className="text-center p-3 bg-light rounded">
            <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
              No hay noticias disponibles.
            </p>
          </div>
        ) : (
          <>
            {currentNoticias.map((noticia, index) => (
              <Col xs={12} key={index}>
                <Card
                  className="border-0 shadow-sm"
                  style={{
                    height: "140px",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    transform:
                      hoveredCard === index ? "translateY(-2px)" : "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="d-flex h-100">
                    <div
                      style={{
                        width: "120px",
                        height: "100%",
                        backgroundImage: "url('/images/nutricion.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "8px 0 0 8px",
                        flexShrink: 0,
                      }}
                    />
                    <Card.Body className="p-3 d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title
                          className="mb-1"
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "600",
                            color: "#007bff",
                            lineHeight: "1.2",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {noticia.titulo}
                        </Card.Title>
                        <Card.Text
                          className="text-muted mb-2"
                          style={{
                            fontSize: "0.75rem",
                            lineHeight: "1.3",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {truncateText(noticia.contenido)}
                        </Card.Text>
                      </div>
                      <a
                        href="https://sites.google.com/liceoexperimental.cl/proyectonutricionydietetica/noticias"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                        style={{
                          fontSize: "0.7rem",
                          padding: "4px 8px",
                          borderRadius: "12px",
                          alignSelf: "flex-start",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Leer más
                      </a>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </>
        )}
      </Row>

      {noticias.length > 2 && (
        <div className="d-flex justify-content-center align-items-center mt-3 gap-2">
          <Button
            variant="outline-primary"
            size="sm"
            onClick={handlePrevPage}
            style={{
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              padding: "0",
              fontSize: "0.7rem",
            }}
          >
            ←
          </Button>
          <span className="text-muted" style={{ fontSize: "0.75rem" }}>
            {currentPage + 1} / {totalPages}
          </span>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={handleNextPage}
            style={{
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              padding: "0",
              fontSize: "0.7rem",
            }}
          >
            →
          </Button>
        </div>
      )}
    </div>
  );
};

export default NoticiasScraper;
