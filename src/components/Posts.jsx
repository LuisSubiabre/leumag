import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card, Spinner } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'%3E%3Crect fill='%23e8f3ff' width='400' height='220'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%235b6b82' font-family='sans-serif' font-size='15'%3ESin imagen%3C/text%3E%3C/svg%3E";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("es-CL", options);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://portal.liceoexperimental.cl/wp-json/wp/v2/posts?per_page=6",
        );
        const postsData = await Promise.all(
          response.data.map(async (post) => {
            const {
              featured_media: featuredMediaId,
              id,
              title,
              content,
              date,
            } = post;
            const featuredMediaResponse = featuredMediaId
              ? await axios.get(
                  `https://portal.liceoexperimental.cl/wp-json/wp/v2/media/${featuredMediaId}`,
                )
              : null;
            const featuredMedia = featuredMediaResponse
              ? featuredMediaResponse.data.source_url
              : null;
            return {
              id,
              title: title.rendered,
              content: content.rendered.substring(0, 100) + "...",
              featuredMedia,
              date: formatDate(date),
            };
          }),
        );
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section aria-labelledby="ultimas-noticias-titulo">
      <div className="home-section-head">
        <div>
          <h2 id="ultimas-noticias-titulo">Lo que está pasando</h2>
          <p>Novedades y noticias recientes.</p>
        </div>
        <Link
          to="/Noticias"
          className="btn btn-primary btn-ver-todas d-none d-md-inline-flex align-items-center gap-2"
        >
          Ver todas
          <FaArrowRight size={12} />
        </Link>
      </div>

      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center py-5">
          <div className="text-center">
            <Spinner animation="border" role="status" className="text-primary">
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
            <p className="mt-3 mb-0 text-muted">Cargando noticias…</p>
          </div>
        </div>
      ) : (
        <Row>
          {posts.map((post) => (
            <Col md={6} lg={4} key={post.id} className="mb-3">
              <Link to={`Noticia/${post.id}`} className="text-decoration-none">
                <Card className="noticia-card h-100">
                  <div className="noticia-card-img-wrap">
                    <Card.Img
                      variant="top"
                      src={post.featuredMedia || PLACEHOLDER_IMG}
                      alt={post.title.replace(/<[^>]+>/g, "")}
                      loading="lazy"
                    />
                  </div>
                  <Card.Body>
                    <small className="noticia-fecha">{post.date}</small>
                    <Card.Title
                      dangerouslySetInnerHTML={{ __html: post.title }}
                      className="noticia-titulo"
                    />
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
          <div className="d-flex d-md-none justify-content-center mt-1 mb-1">
            <Link
              to="/Noticias"
              className="btn btn-primary btn-ver-todas d-inline-flex align-items-center gap-2"
            >
              Ver todas las noticias
              <FaArrowRight size={12} />
            </Link>
          </div>
        </Row>
      )}
    </section>
  );
};

export default Posts;
