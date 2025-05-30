import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card, Form, Spinner } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Noticias = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      if (!hasMore) return;
      try {
        setLoading(true);
        const response = await axios.get(
          `https://portal.liceoexperimental.cl/wp-json/wp/v2/posts?page=${page}&per_page=10`
        );
        const postsData = await Promise.all(
          response.data.map(async (post) => {
            const {
              featured_media: featuredMediaId,
              id,
              title,
              content,
              link,
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
            };
          })
        );

        setPosts((prevPosts) => [...prevPosts, ...postsData]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);

        // Verificar si hay más posts para cargar
        if (postsData.length < 10) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
          document.documentElement.offsetHeight &&
        !loading
      ) {
        fetchPosts();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cargar los primeros posts al montar el componente
    fetchPosts();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, hasMore, loading]);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container contenedor px-5">
      <Form className="mb-4 d-flex align-items-center">
        <Form.Control
          type="text"
          placeholder="Buscar noticias..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="me-2"
        />
        <FaSearch />
      </Form>
      <Row>
        <h2>Todas las noticias:</h2>
        {filteredPosts.map((post, index) => (
          <Col md={4} key={index}>
            <Card className="shadow-lg mb-5 bg-body-tertiary rounded-3">
              <Card.Img
                variant="top"
                src={post.featuredMedia}
                alt="Imagen destacada"
                className="rounded-top"
              />
              <Card.Body className="p-4">
                <Card.Title
                  className="text-primary fw-bold"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                ></Card.Title>
                <Card.Text
                  className="text-secondary"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></Card.Text>
                <div className="d-flex justify-content-end mt-3">
                  <Link
                    to={`/Noticia/${post.id}`}
                    className="btn btn-primary"
                    style={{
                      fontSize: "0.95rem",
                      padding: "8px 20px",
                      borderRadius: "30px",
                      fontWeight: "600",
                      boxShadow: "0 4px 8px rgba(0, 123, 255, 0.3)",
                      transition: "all 0.3s ease",
                      backgroundColor: "#007bff",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 12px rgba(0, 123, 255, 0.4)";
                      e.currentTarget.style.backgroundColor = "#0056b3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 8px rgba(0, 123, 255, 0.3)";
                      e.currentTarget.style.backgroundColor = "#007bff";
                    }}
                  >
                    Leer noticia
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginLeft: "4px" }}
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
        ))}
        {loading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            <Spinner animation="grow" role="status">
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
          </div>
        )}
        {!hasMore && (
          <p className="text-center text-muted">
            No hay más noticias para mostrar.
          </p>
        )}
      </Row>
    </div>
  );
};

export default Noticias;
