import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Spinner } from "react-bootstrap";
import { FaHistory, FaArrowRight } from "react-icons/fa";

const ITEMS_POR_COLUMNA = 6;

const formatDate = (dateString) => {
  const options = { day: "numeric", month: "short", year: "numeric" };
  return new Date(dateString).toLocaleDateString("es-CL", options);
};

const NoticiaAnterior = ({ post }) => (
  <Link
    to={`/Noticia/${post.id}`}
    className="text-decoration-none text-reset d-block"
  >
    <article
      className="noticia-anterior-item d-flex align-items-center gap-2 py-2 px-1"
      style={{ cursor: "pointer" }}
    >
      {post.featuredMedia && (
        <img
          src={post.featuredMedia}
          alt={post.title}
          style={{
            width: "52px",
            height: "40px",
            objectFit: "cover",
            borderRadius: "4px",
            flexShrink: 0,
            filter: "grayscale(30%)",
            opacity: 0.85,
          }}
          loading="lazy"
        />
      )}
      <div className="min-w-0">
        <span
          className="d-block text-muted"
          style={{ fontSize: "0.7rem", lineHeight: 1.2 }}
        >
          {post.date}
        </span>
        <h4
          className="mb-0 fw-normal text-secondary"
          style={{ fontSize: "0.78rem", lineHeight: 1.3 }}
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
      </div>
    </article>
  </Link>
);

const NoticiasCompactas = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://portal.liceoexperimental.cl/wp-json/wp/v2/posts?per_page=18",
        );

        const postsData = await Promise.all(
          response.data.slice(6, 18).map(async (post) => {
            const { featured_media: featuredMediaId, id, title, date } = post;

            const featuredMediaResponse = featuredMediaId
              ? await axios.get(
                  `https://portal.liceoexperimental.cl/wp-json/wp/v2/media/${featuredMediaId}`,
                )
              : null;

            return {
              id,
              title: title.rendered,
              featuredMedia: featuredMediaResponse?.data.source_url ?? null,
              date: formatDate(date),
            };
          }),
        );

        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching compact posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center py-3">
        <Spinner animation="border" size="sm" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  if (posts.length === 0) return null;

  const columnas = [];
  for (let i = 0; i < posts.length; i += ITEMS_POR_COLUMNA) {
    columnas.push(posts.slice(i, i + ITEMS_POR_COLUMNA));
  }

  return (
    <section
      className="mb-4 mt-2 p-3 rounded"
      style={{
        backgroundColor: "var(--bs-tertiary-bg)",
        border: "1px solid var(--bs-border-color)",
        borderTop: "3px solid var(--bs-secondary)",
      }}
    >
      <h3
        className="h6 text-muted text-uppercase mb-3 d-flex align-items-center gap-2"
        style={{ letterSpacing: "0.05em", fontSize: "0.8rem" }}
      >
        <FaHistory size={12} />
        Noticias anteriores
      </h3>

      <Row className="g-3">
        {columnas.map((grupo, colIndex) => (
          <Col key={colIndex} xs={12} md={6} lg={columnas.length > 2 ? 4 : 6}>
            <div
              className="h-100 px-2 py-1 rounded"
              style={{
                backgroundColor: "var(--bs-body-bg)",
                border: "1px dashed var(--bs-border-color)",
              }}
            >
              {grupo.map((post) => (
                <NoticiaAnterior key={post.id} post={post} />
              ))}
            </div>
          </Col>
        ))}
      </Row>
      <div className="mt-3 pt-2 d-flex justify-content-end border-top border-secondary-subtle">
        <Link
          to="/Noticias"
          className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
            borderRadius: "4px",
          }}
        >
          Ver todas las noticias
          <FaArrowRight size={10} />
        </Link>
      </div>
    </section>
  );
};

export default NoticiasCompactas;
