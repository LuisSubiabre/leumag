import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRight } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import "./UltimosVideosScroll.css";

const CHANNEL_ID = "UCrR4xpjHUVkhhSDhMLEqIOw";
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@LiceoExperimentalUmag";

const fallbackVideos = [
  {
    title: "Canal oficial del Liceo Experimental UMAG",
    link: YOUTUBE_CHANNEL_URL,
    videoId: "fallback1",
    thumbnail: "/images/bannerumag.png",
    published: "",
  },
];

const decodeHtmlEntities = (text = "") => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

const formatRelativeDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const diffMs = Date.now() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Hoy";
  if (diffDays === 1) return "Ayer";
  if (diffDays < 7) return `Hace ${diffDays} días`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? "Hace 1 semana" : `Hace ${weeks} semanas`;
  }

  return date.toLocaleDateString("es-CL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const UltimosVideosScroll = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const cargarVideos = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
        );

        if (!response.ok) throw new Error("No se pudo cargar el feed");

        const data = await response.json();
        if (!data?.items?.length) throw new Error("Feed sin videos");

        const videosFormateados = data.items.slice(0, 4).map((item) => {
          const videoId = item.link.split("v=")[1];
          return {
            title: decodeHtmlEntities(item.title || "Sin título"),
            link: item.link,
            videoId,
            thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
            published: item.pubDate,
          };
        });

        setVideos(videosFormateados);
        setIsOffline(false);
      } catch {
        setVideos(fallbackVideos);
        setIsOffline(true);
      } finally {
        setIsLoading(false);
      }
    };

    cargarVideos();
  }, []);

  return (
    <section className="home-videos" aria-labelledby="videos-home-titulo">
      <div className="home-section-head">
        <div>
          <p className="home-kicker">
            <FontAwesomeIcon icon={faYoutube} /> En imágenes
          </p>
          <h2 id="videos-home-titulo">Últimos videos</h2>
        </div>
        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="home-text-link"
        >
          Ver canal
          <FaArrowRight size={12} />
        </a>
      </div>

      {isOffline && !isLoading ? (
        <p className="small text-muted mb-3">
          No se pudo cargar el canal. Puedes visitarlo en YouTube.
        </p>
      ) : null}

      {isLoading ? (
        <div className="d-flex justify-content-center py-4">
          <Spinner animation="border" role="status" className="text-primary">
            <span className="visually-hidden">Cargando videos...</span>
          </Spinner>
        </div>
      ) : (
        <div className="home-videos__grid">
          {videos.map((video) => (
            <a
              key={video.videoId}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="home-video-card"
              aria-label={`Ver en YouTube: ${video.title}`}
            >
              <div className="home-video-card__thumb">
                <img
                  src={video.thumbnail}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span className="home-video-card__play" aria-hidden="true">
                  <FontAwesomeIcon icon={faPlay} />
                </span>
              </div>
              <h3>{video.title}</h3>
              {video.published ? (
                <time dateTime={new Date(video.published).toISOString()}>
                  {formatRelativeDate(video.published)}
                </time>
              ) : null}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default UltimosVideosScroll;
