import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card, Form, Spinner } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const POSTS_URL = "https://portal.liceoexperimental.cl/wp-json/wp/v2/posts";
const PER_PAGE = 10;
const SEARCH_DELAY_MS = 400;

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("es-ES", options);
};

const toPostCard = (post) => ({
  id: post.id,
  title: post.title.rendered,
  content: post.content.rendered.substring(0, 100) + "...",
  link: post.link,
  featuredMedia: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
  date: formatDate(post.date),
});

const Noticias = () => {
  const [posts, setPosts] = useState([]);
  // La búsqueda y la página van juntas para que una búsqueda nueva
  // vuelva a la página 1 con una sola petición.
  const [request, setRequest] = useState({ query: "", page: 1 });
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Espera a que el usuario deje de escribir antes de consultar la API
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const query = searchTerm.trim();
      setRequest((prev) =>
        prev.query === query ? prev : { query, page: 1 }
      );
    }, SEARCH_DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  useEffect(() => {
    const controller = new AbortController();
    const { query, page } = request;

    const loadPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(POSTS_URL, {
          params: {
            page,
            per_page: PER_PAGE,
            _embed: "wp:featuredmedia",
            ...(query && { search: query }),
          },
          signal: controller.signal,
        });

        const newPosts = response.data.map(toPostCard);
        setPosts((prevPosts) =>
          page === 1
            ? newPosts
            : [
                ...prevPosts,
                // Filtrar posts duplicados
                ...newPosts.filter(
                  (newPost) =>
                    !prevPosts.some((post) => post.id === newPost.id)
                ),
              ]
        );
        setHasMore(response.data.length === PER_PAGE);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.error("Error fetching data:", error);
        setHasMore(false);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadPosts();

    return () => controller.abort();
  }, [request]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
          document.documentElement.offsetHeight &&
        !loading &&
        hasMore
      ) {
        setLoading(true);
        setRequest((prev) => ({ ...prev, page: prev.page + 1 }));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore]);

  return (
    <div className="container contenedor px-5">
      <Form
        className="mb-4 d-flex align-items-center"
        onSubmit={(e) => e.preventDefault()}
      >
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
        {posts.map((post) => (
          <Col md={4} key={post.id}>
            <Card className="shadow-lg mb-5 bg-body-tertiary rounded-3">
              <Card.Img
                variant="top"
                src={post.featuredMedia}
                alt="Imagen destacada"
                className="rounded-top"
                loading="lazy"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small
                    className="text-muted"
                    style={{
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                      color: "var(--bs-body-color)",
                      backgroundColor: "var(--bs-tertiary-bg)",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      border: "1px solid var(--bs-border-color)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {post.date}
                  </small>
                </div>
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
        {!loading && posts.length === 0 && request.query && (
          <p className="text-center text-muted">
            No se encontraron noticias para “{request.query}”.
          </p>
        )}
        {!hasMore && posts.length > 0 && (
          <p className="text-center text-muted">
            Has llegado al final de las noticias.
          </p>
        )}
      </Row>
    </div>
  );
};

export default Noticias;
