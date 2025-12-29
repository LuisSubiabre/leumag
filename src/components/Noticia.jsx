import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import ArticleReader from "./ArticleReader";
import { FaFacebook, FaWhatsapp, FaLink } from "react-icons/fa";

const Noticia = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleShare = (platform) => {
    if (!noticia) return;

    const url = window.location.href;
    const title = noticia.title;
    const description =
      noticia.content.replace(/<[^>]*>/g, "").substring(0, 200) + "...";

    switch (platform) {
      case "facebook": {
        // Usar la URL canónica de WordPress que ya viene con todos los metadatos
        const wordpressUrl = noticia.link;
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            wordpressUrl
          )}`,
          "_blank"
        );
        break;
      }
      case "whatsapp": {
        const whatsappText = `${title}\n\n${description}\n\n${url}`;
        window.open(
          `https://wa.me/?text=${encodeURIComponent(whatsappText)}`,
          "_blank"
        );
        break;
      }
      case "copy": {
        const copyText = `${title}\n\n${url}`;
        navigator.clipboard.writeText(copyText).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://portal.liceoexperimental.cl/wp-json/wp/v2/posts/${id}`
        );
        const post = response.data;
        const featuredMediaResponse = post.featured_media
          ? await axios.get(
              `https://portal.liceoexperimental.cl/wp-json/wp/v2/media/${post.featured_media}`
            )
          : null;

        setNoticia({
          id: post.id,
          title: post.title.rendered,
          content: post.content.rendered,
          link: post.link,
          date: new Date(post.date).toLocaleDateString("es-CL"),
          featuredMedia: featuredMediaResponse
            ? featuredMediaResponse.data.source_url
            : null,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          "No se pudo cargar la noticia. Por favor, intenta nuevamente más tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [id]);

  if (loading) {
    return (
      <div className="contenedor container d-flex justify-content-center align-items-center min-vh-50">
        <div className="text-center" role="status" aria-live="polite">
          <Spinner
            animation="border"
            variant="primary"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
          <p className="mt-3 text-muted">
            Cargando la noticia, por favor espera...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="contenedor container py-5">
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Link to="/" className="btn btn-outline-danger">
              Volver al inicio
            </Link>
          </div>
        </Alert>
      </div>
    );
  }

  if (!noticia) {
    return (
      <div className="contenedor container py-5">
        <Alert variant="warning">
          <Alert.Heading>Noticia no encontrada</Alert.Heading>
          <p>Lo sentimos, la noticia que buscas no está disponible.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Link to="/" className="btn btn-outline-warning">
              Volver al inicio
            </Link>
          </div>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-vh-100">
      <article className="container contenedor py-5">
        {/* Breadcrumb mejorado */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol
            className="breadcrumb rounded-pill px-3 py-2 shadow-sm"
            style={{ backgroundColor: "var(--bs-body-bg)" }}
          >
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none text-primary">
                <i className="fas fa-home me-1"></i>Inicio
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link
                to="/noticias"
                className="text-decoration-none text-primary"
              >
                Noticias
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <span className="text-muted">Noticia actual</span>
            </li>
          </ol>
        </nav>

        {/* Card principal con sombra y bordes redondeados */}
        <div
          className="rounded-4 shadow-lg overflow-hidden"
          style={{ backgroundColor: "var(--bs-body-bg)" }}
        >
          {/* Imagen destacada como hero */}

          {/* Contenido de la noticia */}
          <div className="p-4 p-md-5">
            {/* Header con título y fecha */}
            <header className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="badge bg-primary rounded-pill px-3 py-2">
                  <i className="fas fa-newspaper me-1"></i>Noticia
                </span>
                <span className="text-muted">
                  <i className="fas fa-calendar-alt me-1"></i>
                  {noticia.date}
                </span>
              </div>

              <h1
                className="display-5 fw-bold mb-4"
                style={{
                  lineHeight: "1.2",
                  color: "var(--bs-body-color)",
                }}
                dangerouslySetInnerHTML={{ __html: noticia.title }}
              ></h1>

              {/* Botones de compartir con coherencia visual */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => handleShare("facebook")}
                  className="btn btn-primary d-flex align-items-center gap-2 px-3 py-2 text-uppercase fw-bold"
                  style={{
                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                    letterSpacing: "0.5px",
                    whiteSpace: "nowrap",
                    transition: "all 0.3s ease",
                  }}
                  title="Compartir en Facebook"
                >
                  <FaFacebook size={16} />
                  <span className="d-none d-sm-inline">Facebook</span>
                </button>

                <button
                  onClick={() => handleShare("whatsapp")}
                  className="btn btn-success d-flex align-items-center gap-2 px-3 py-2 text-uppercase fw-bold"
                  style={{
                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                    letterSpacing: "0.5px",
                    whiteSpace: "nowrap",
                    transition: "all 0.3s ease",
                  }}
                  title="Compartir en WhatsApp"
                >
                  <FaWhatsapp size={16} />
                  <span className="d-none d-sm-inline">WhatsApp</span>
                </button>

                <button
                  onClick={() => handleShare("copy")}
                  className={`btn d-flex align-items-center gap-2 px-3 py-2 text-uppercase fw-bold ${
                    copied ? "btn-primary" : "btn-outline-secondary"
                  }`}
                  style={{
                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                    letterSpacing: "0.5px",
                    whiteSpace: "nowrap",
                    transition: "all 0.3s ease",
                  }}
                  title="Copiar enlace"
                >
                  <FaLink size={16} />
                  <span className="d-none d-sm-inline">
                    {copied ? "¡Copiado!" : "Copiar enlace"}
                  </span>
                </button>
              </div>
            </header>

            {/* Separador visual */}
            <hr className="my-4 opacity-25" />

            {/* Contenido de la noticia */}
            <div className="article-content">
              <ArticleReader articleText={noticia.content} />

              <div
                className="content mt-4"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "var(--bs-body-color)",
                }}
                dangerouslySetInnerHTML={{ __html: noticia.content }}
              ></div>
            </div>

            {/* Footer de la noticia */}
            <footer className="mt-5 pt-4 border-top">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div className="text-muted small">
                  <i className="fas fa-info-circle me-1"></i>
                  Noticia del Liceo Experimental
                </div>
                <Link
                  to="/noticias"
                  className="btn btn-primary d-flex align-items-center gap-2 px-3 py-2 text-uppercase fw-bold"
                  style={{
                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                    letterSpacing: "0.5px",
                    whiteSpace: "nowrap",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                >
                  <i className="fas fa-arrow-left"></i>
                  <span>Ver más noticias</span>
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Noticia;
