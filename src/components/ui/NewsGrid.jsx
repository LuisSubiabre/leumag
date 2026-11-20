import { Link } from "react-router-dom";
import { FaArrowRight, FaNewspaper } from "react-icons/fa";
import "./Page.css";

const formatoFecha = new Intl.DateTimeFormat("es-CL", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** Tarjeta de noticia de WordPress. `featured` la muestra grande y horizontal. */
export function NewsCard({ post, featured = false }) {
  return (
    <Link
      to={`/Noticia/${post.id}`}
      className={`lp-news-card${featured ? " lp-news-card--featured" : ""}`}
    >
      <span className="lp-news-card__media">
        {post.featuredMedia ? (
          <img src={post.featuredMedia} alt="" loading="lazy" />
        ) : (
          <span className="lp-news-card__placeholder" aria-hidden="true">
            <FaNewspaper />
          </span>
        )}
      </span>
      <span className="lp-news-card__body">
        {post.date && (
          <time className="lp-news-card__date" dateTime={post.date}>
            {formatoFecha.format(new Date(post.date))}
          </time>
        )}
        <span
          className="lp-news-card__title"
          dangerouslySetInnerHTML={{ __html: post.title?.rendered ?? "" }}
        />
        <span
          className="lp-news-card__excerpt"
          dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered ?? "" }}
        />
        <span className="lp-news-card__action">
          Leer noticia
          <FaArrowRight size={11} aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}

/** Tarjeta gris de "cargando". */
export function NewsCardSkeleton() {
  return (
    <div className="lp-news-card lp-news-card--skeleton" aria-hidden="true">
      <span className="lp-news-card__media" />
      <span className="lp-news-card__body">
        <span className="lp-skeleton lp-skeleton--short" />
        <span className="lp-skeleton" />
        <span className="lp-skeleton" />
      </span>
    </div>
  );
}

/** Grilla de noticias con estados de carga, vacío y error. */
export function NewsGrid({ posts, loading, error, empty = "No hay noticias disponibles por ahora." }) {
  if (loading) {
    return (
      <div className="lp-news-grid" aria-busy="true" aria-label="Cargando noticias">
        {[0, 1, 2].map((i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className="lp-empty">
        <FaNewspaper aria-hidden="true" />
        <p>{error ? "No pudimos cargar las noticias. Intenta nuevamente más tarde." : empty}</p>
      </div>
    );
  }

  return (
    <div className="lp-news-grid" data-reveal>
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </div>
  );
}
