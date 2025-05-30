import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card, Spinner } from "react-bootstrap";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://portal.liceoexperimental.cl/wp-json/wp/v2/posts?per_page=6"
        );
        const postsData = await Promise.all(
          response.data.map(async (post) => {
            const {
              featured_media: featuredMediaId,
              id,
              title,
              content,
              link,
              date,
            } = post;
            const featuredMediaResponse = featuredMediaId
              ? await axios.get(
                  `https://portal.liceoexperimental.cl/wp-json/wp/v2/media/${featuredMediaId}`
                )
              : null;
            const featuredMedia = featuredMediaResponse
              ? featuredMediaResponse.data.source_url
              : null;
            return {
              id,
              title: title.rendered,
              content: content.rendered.substring(0, 100) + "...",
              link,
              featuredMedia,
              date: formatDate(date),
            };
          })
        );
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Mostrar mensaje de error al usuario
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Row className="card-deck">
      <h2 className="mb-4">Últimas noticias:</h2>
      {isLoading ? (
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
            <p className="mt-3">
              Cargando las últimas noticias, por favor espera...
            </p>
          </div>
        </div>
      ) : (
        <>
          {posts.map((post, index) => (
            <Col md={6} lg={4} key={index} className="mb-3">
              <Link to={`Noticia/${post.id}`} className="text-decoration-none">
                <Card
                  className="rounded h-100"
                  style={{
                    height: "350px",
                    boxShadow:
                      hoveredCard === post.id
                        ? "0 8px 16px rgba(0, 123, 255, 0.2)"
                        : "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    transform:
                      hoveredCard === post.id ? "translateY(-5px)" : "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredCard(post.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card.Img
                    variant="top"
                    src={post.featuredMedia}
                    alt={post.title}
                    className="img-fluid"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredCard === post.id ? "scale(1.02)" : "scale(1)",
                    }}
                  />
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <small
                        className="text-muted"
                        style={{
                          fontSize: "0.9rem",
                          fontStyle: "italic",
                          color: "#6c757d",
                          backgroundColor: "#f8f9fa",
                          padding: "4px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        {post.date}
                      </small>
                    </div>
                    <Card.Title
                      dangerouslySetInnerHTML={{ __html: post.title }}
                      className="h2"
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        marginBottom: "15px",
                      }}
                    ></Card.Title>
                    <Card.Text
                      dangerouslySetInnerHTML={{ __html: post.content }}
                      className="text-muted"
                    ></Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
          <div className="mb-2 d-flex flex-row-reverse bd-highlight">
            <Link
              to="/Noticias"
              className="btn btn-primary"
              style={{
                fontSize: "1.1rem",
                padding: "10px 20px",
                borderRadius: "30px",
                fontWeight: "600",
                boxShadow: "0 4px 8px rgba(0, 123, 255, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(0, 123, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 123, 255, 0.3)";
              }}
            >
              Ver todas las noticias
            </Link>
          </div>
        </>
      )}
    </Row>
  );
};

export default Posts;
