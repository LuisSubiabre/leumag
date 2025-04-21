import "./CentroDeAlumnos.css";
import { useState, useEffect } from "react";
import { Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const CentroDeAlumnos = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        // Primero obtenemos el ID de la categoría CAA
        const categoriesResponse = await fetch(
          "https://portal.liceoexperimental.cl/wp-json/wp/v2/categories"
        );
        const categories = await categoriesResponse.json();
        const caaCategory = categories.find((cat) => cat.slug === "caa");

        if (caaCategory) {
          // Luego obtenemos los posts de esa categoría
          const postsResponse = await fetch(
            `https://portal.liceoexperimental.cl/wp-json/wp/v2/posts?categories=${caaCategory.id}`
          );
          const posts = await postsResponse.json();

          // Obtener las imágenes destacadas para cada post
          const postsWithImages = await Promise.all(
            posts.map(async (post) => {
              if (post.featured_media) {
                const mediaResponse = await fetch(
                  `https://portal.liceoexperimental.cl/wp-json/wp/v2/media/${post.featured_media}`
                );
                const mediaData = await mediaResponse.json();
                return {
                  ...post,
                  featuredMedia: mediaData.source_url,
                };
              }
              return post;
            })
          );

          setNoticias(postsWithImages);
        }
      } catch (error) {
        console.error("Error al cargar las noticias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="container contenedor px-5">
      <div className="text-center mb-5">
        <h2>Centro de Alumnos</h2>
      </div>

      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-12 col-md-6 text-center">
          <img
            src="/images/caa25.png"
            alt="Centro de Alumnos"
            className="img-fluid rounded-circle img-caa mb-4"
            style={{ width: "400px", height: "400px" }}
          />
        </div>
        <div className="col-12 col-md-6">
          <div className="directiva-list">
            <p className="directiva-item">
              <span className="cargo">Presidenta:</span>
              <span className="nombre">Constanza Quintullanca</span>
              <span className="curso">3ro medio C</span>
            </p>
            <p className="directiva-item">
              <span className="cargo">Vicepresidenta:</span>
              <span className="nombre">Catalina Cárdenas</span>
              <span className="curso">4to medio C</span>
            </p>
            <p className="directiva-item">
              <span className="cargo">Secretaria:</span>
              <span className="nombre">Constanza Whuitt</span>
              <span className="curso">2do medio C</span>
            </p>
            <p className="directiva-item">
              <span className="cargo">Secretario de actas:</span>
              <span className="nombre">Benjamín Mendicute</span>
              <span className="curso">2do medio B</span>
            </p>
            <p className="directiva-item">
              <span className="cargo">Tesorera:</span>
              <span className="nombre">Mara Fernández</span>
              <span className="curso">3ro medio A</span>
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Noticias */}
      <div className="mt-5">
        <h2 className="text-center mb-5">Noticias del CAA</h2>
        <Row>
          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "200px" }}
            >
              <Spinner animation="grow" role="status">
                <span className="visually-hidden">Cargando...</span>
              </Spinner>
            </div>
          ) : noticias.length > 0 ? (
            noticias.map((noticia) => (
              <Col md={4} key={noticia.id} className="mb-4">
                <Card className="h-100">
                  {noticia.featuredMedia && (
                    <Card.Img
                      variant="top"
                      src={noticia.featuredMedia}
                      alt="Imagen destacada"
                      className="card-img-top"
                    />
                  )}
                  <Card.Body className="d-flex flex-column">
                    <Card.Title
                      className="text-primary fw-bold"
                      dangerouslySetInnerHTML={{
                        __html: noticia.title.rendered,
                      }}
                    />
                    <Card.Text
                      className="text-secondary flex-grow-1"
                      dangerouslySetInnerHTML={{
                        __html: noticia.excerpt.rendered,
                      }}
                    />
                    <div className="mt-auto">
                      <Link
                        to={`/Noticia/${noticia.id}`}
                        className="btn btn-primary w-100"
                      >
                        Leer noticia
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ms-2"
                        >
                          <path
                            d="M1 8H15M15 8L8 1M15 8L8 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-muted">
              No hay noticias disponibles
            </p>
          )}
        </Row>
      </div>
    </div>
  );
};

export default CentroDeAlumnos;
