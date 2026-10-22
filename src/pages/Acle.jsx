import { useEffect, useState } from "react";
import { Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const WP_CATEGORIES =
  "https://portal.liceoexperimental.cl/wp-json/wp/v2/categories?per_page=100";
const WP_POSTS = "https://portal.liceoexperimental.cl/wp-json/wp/v2/posts";
const WP_MEDIA = "https://portal.liceoexperimental.cl/wp-json/wp/v2/media";

const Acle = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const categoriesResponse = await fetch(WP_CATEGORIES);
        const categories = await categoriesResponse.json();
        const acleCategory = categories.find(
          (cat) => cat.slug === "acles" || cat.slug === "acle",
        );

        if (!acleCategory) {
          setNoticias([]);
          return;
        }

        const postsResponse = await fetch(
          `${WP_POSTS}?categories=${acleCategory.id}&per_page=12`,
        );
        const posts = await postsResponse.json();

        const postsWithImages = await Promise.all(
          posts.map(async (post) => {
            if (post.featured_media) {
              const mediaResponse = await fetch(
                `${WP_MEDIA}/${post.featured_media}`,
              );
              const mediaData = await mediaResponse.json();
              return {
                ...post,
                featuredMedia: mediaData.source_url,
              };
            }
            return post;
          }),
        );

        setNoticias(postsWithImages);
      } catch (error) {
        console.error("Error al cargar las noticias de ACLE:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="container contenedor px-5">
      <h2>ACLE / Talleres</h2>
      <hr />
      <p className="text-muted mb-4">
        Actividades Curriculares de Libre Elección y talleres del Liceo. Aquí se
        publican las noticias y novedades de ACLE.
      </p>

      <div className="mt-5">
        <h2>Noticias de ACLE</h2>
        <hr />
        <Row>
          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center w-100"
              style={{ height: "200px" }}
            >
              <Spinner animation="grow" role="status">
                <span className="visually-hidden">Cargando...</span>
              </Spinner>
            </div>
          ) : noticias.length > 0 ? (
            noticias.map((noticia) => (
              <Col md={6} lg={4} key={noticia.id} className="mb-4">
                <Card className="h-100">
                  {noticia.featuredMedia ? (
                    <Card.Img
                      variant="top"
                      src={noticia.featuredMedia}
                      alt=""
                      className="card-img-top"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  ) : null}
                  <Card.Body className="d-flex flex-column">
                    <Card.Title
                      className="text-primary fw-bold fs-6"
                      dangerouslySetInnerHTML={{
                        __html: noticia.title.rendered,
                      }}
                    />
                    <Card.Text
                      className="text-secondary flex-grow-1 small"
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
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-muted">
              No hay noticias de ACLE disponibles por ahora.
            </p>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Acle;
