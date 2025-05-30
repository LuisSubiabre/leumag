import { useState, useEffect, useCallback } from "react";
import { scrapeNoticias } from "../services/scrapingService";
import { Row, Col, Card, Spinner } from "react-bootstrap";

const NoticiasScraper = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const obtenerNoticias = useCallback(async () => {
    try {
      setLoading(true);
      const data = await scrapeNoticias();
      // Tomar solo las 8 noticias más recientes
      setNoticias(data.slice(0, 8));
      setError(null);
      setUltimaActualizacion(new Date());
    } catch (err) {
      setError(
        "No se pudieron cargar las noticias. Por favor, intente nuevamente más tarde."
      );
      setNoticias([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Actualización automática cada 5 minutos
  useEffect(() => {
    obtenerNoticias();

    const intervalo = setInterval(() => {
      obtenerNoticias();
    }, 5 * 60 * 1000); // 5 minutos

    return () => clearInterval(intervalo);
  }, [obtenerNoticias]);

  if (loading && noticias.length === 0) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <div className="text-center">
          <Spinner
            animation="border"
            role="status"
            style={{ color: "#007bff", width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
          <p className="mt-3">Cargando las noticias, por favor espera...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-50 rounded-lg">
        <h2 className="text-xl font-semibold text-red-600 mb-2">
          Error al cargar las noticias
        </h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <Row className="card-deck">
      {ultimaActualizacion && (
        <div className="w-100 mb-3">
          <small className="text-muted">
            Última actualización: {ultimaActualizacion.toLocaleTimeString()}
          </small>
        </div>
      )}

      {noticias.length === 0 ? (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">
            No hay noticias disponibles en este momento.
          </p>
        </div>
      ) : (
        <>
          {noticias.map((noticia, index) => (
            <Col md={6} lg={3} key={index} className="mb-3">
              <Card
                className="rounded h-100"
                style={{
                  height: "350px",
                  boxShadow:
                    hoveredCard === index
                      ? "0 8px 16px rgba(0, 123, 255, 0.2)"
                      : "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  transform:
                    hoveredCard === index ? "translateY(-5px)" : "none",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card.Img
                  variant="top"
                  src="/images/nutricion.png"
                  alt="Nutrición"
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    transform:
                      hoveredCard === index ? "scale(1.02)" : "scale(1)",
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title
                    className="h2"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      marginBottom: "15px",
                      color: "#007bff",
                    }}
                  >
                    {noticia.titulo}
                  </Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {truncateText(noticia.contenido)}
                  </Card.Text>
                  <a
                    href="https://sites.google.com/liceoexperimental.cl/proyectonutricionydietetica/noticias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-auto"
                    style={{
                      width: "100%",
                      borderRadius: "20px",
                      transition: "all 0.3s ease",
                      backgroundColor: "#007bff",
                      border: "none",
                      padding: "8px 16px",
                      fontWeight: "600",
                      boxShadow: "0 2px 4px rgba(0, 123, 255, 0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 8px rgba(0, 123, 255, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 4px rgba(0, 123, 255, 0.2)";
                    }}
                  >
                    Leer noticia
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </>
      )}
    </Row>
  );
};

export default NoticiasScraper;
