import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect fill='%231a2b4a' width='800' height='500'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2390caf9' font-family='sans-serif' font-size='22'%3ESin imagen%3C/text%3E%3C/svg%3E";

const stripHtml = (html = "") =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const excerptOf = (html, max = 150) => {
  const text = stripHtml(html);
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
};

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const mediaUrl = (post) =>
  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || PLACEHOLDER_IMG;

const NewsCard = ({ post, variant = "grid" }) => {
  const title = stripHtml(post.title?.rendered);
  const excerpt = excerptOf(post.excerpt?.rendered || post.content?.rendered);

  return (
    <Link
      to={`/Noticia/${post.id}`}
      className={`news-card news-card--${variant}`}
    >
      <img src={mediaUrl(post)} alt="" loading="lazy" />
      <div className="news-card__copy">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        {variant === "feature" && excerpt ? <p>{excerpt}</p> : null}
      </div>
      <span className="visually-hidden">{title}</span>
    </Link>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://portal.liceoexperimental.cl/wp-json/wp/v2/posts?per_page=6&_embed",
        );
        setPosts(response.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const featured = posts[0];
  const side = posts.slice(1, 3);
  const grid = posts.slice(3, 6);

  return (
    <section className="home-news" aria-labelledby="ultimas-noticias-titulo">
      <div className="home-section-head">
        <div>
          <p className="home-kicker">Actualidad</p>
          <h2 id="ultimas-noticias-titulo">Lo que está pasando</h2>
        </div>
        <Link to="/Noticias" className="home-text-link">
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
      ) : posts.length === 0 ? (
        <p className="text-muted mb-0">No hay noticias disponibles por ahora.</p>
      ) : (
        <>
          <div className="news-spotlight">
            {featured ? <NewsCard post={featured} variant="feature" /> : null}
            {side.length > 0 ? (
              <div className="news-side">
                {side.map((post) => (
                  <NewsCard key={post.id} post={post} variant="side" />
                ))}
              </div>
            ) : null}
          </div>

          {grid.length > 0 ? (
            <div className="news-grid">
              {grid.map((post) => (
                <NewsCard key={post.id} post={post} variant="grid" />
              ))}
            </div>
          ) : null}
        </>
      )}
    </section>
  );
};

export default Posts;
