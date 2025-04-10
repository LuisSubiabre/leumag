import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import ArticleReader from "./ArticleReader";

const Noticia = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <article className="container contenedor py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/noticias">Noticias</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Noticia actual
          </li>
        </ol>
      </nav>

      <header className="mb-4">
        <h1
          className="display-4 mb-3"
          dangerouslySetInnerHTML={{ __html: noticia.title }}
        ></h1>
        <div className="text-muted mb-4">Publicado el {noticia.date}</div>
      </header>

      {noticia.featuredMedia && (
        <figure className="figure mb-4">
          <img
            src={noticia.featuredMedia}
            alt=""
            className="figure-img img-fluid rounded shadow-sm"
            style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
          />
        </figure>
      )}

      <ArticleReader articleText={noticia.content} />

      <div className="content article-content pb-4">
        <div dangerouslySetInnerHTML={{ __html: noticia.content }}></div>
      </div>
    </article>
  );
};

export default Noticia;
