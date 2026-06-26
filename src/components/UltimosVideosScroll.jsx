import { useCallback, useEffect, useRef, useState } from "react";
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
  },
  {
    title: "Actividades destacadas del LEUMAG",
    link: YOUTUBE_CHANNEL_URL,
    videoId: "fallback2",
  },
  {
    title: "Conoce nuestro contenido en YouTube",
    link: YOUTUBE_CHANNEL_URL,
    videoId: "fallback3",
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

const VideoSkeleton = () => (
  <div
    className="d-flex mb-3 p-2 border rounded align-items-stretch bg-body"
    style={{ gap: "0.75rem" }}
    aria-hidden="true"
  >
    <div
      className="video-scroll-skeleton rounded"
      style={{ width: "110px", height: "62px", flexShrink: 0 }}
    />
    <div className="flex-grow-1 d-flex flex-column justify-content-center gap-2">
      <div
        className="video-scroll-skeleton rounded"
        style={{ height: "14px", width: "90%" }}
      />
      <div
        className="video-scroll-skeleton rounded"
        style={{ height: "14px", width: "60%" }}
      />
      <div
        className="video-scroll-skeleton rounded"
        style={{ height: "10px", width: "35%" }}
      />
    </div>
  </div>
);

const UltimosVideosScroll = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const contenedorRef = useRef(null);
  const scrollPosicionRef = useRef(0);
  const pausaManualRef = useRef(false);
  const pausaHoverRef = useRef(false);
  const pausaManualTimerRef = useRef(null);
  const animacionRef = useRef(null);

  const pausarTemporalmente = useCallback(() => {
    pausaManualRef.current = true;
    setIsPaused(true);

    if (pausaManualTimerRef.current) {
      clearTimeout(pausaManualTimerRef.current);
    }

    pausaManualTimerRef.current = setTimeout(() => {
      pausaManualRef.current = false;
      setIsPaused(false);
    }, 4000);
  }, []);

  useEffect(() => {
    const cargarVideos = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
        );

        if (!response.ok) throw new Error("No se pudo cargar el feed");

        const data = await response.json();

        if (!data?.items?.length) throw new Error("Feed sin videos");

        const videosFormateados = data.items.slice(0, 6).map((item) => {
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
        setVideos(
          fallbackVideos.map((video) => ({
            ...video,
            thumbnail: "/images/bannerumag.png",
            published: "",
          })),
        );
        setIsOffline(true);
      } finally {
        setIsLoading(false);
      }
    };

    cargarVideos();
  }, []);

  useEffect(() => {
    const contenedor = contenedorRef.current;
    if (!contenedor || videos.length === 0 || isLoading) return;

    const prefiereMenosMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefiereMenosMovimiento) return;

    const avanzarScroll = () => {
      if (pausaManualRef.current || pausaHoverRef.current) {
        animacionRef.current = requestAnimationFrame(avanzarScroll);
        return;
      }

      scrollPosicionRef.current += 0.4;
      const alturaLista = contenedor.scrollHeight / 2;

      if (alturaLista <= 0 || scrollPosicionRef.current >= alturaLista) {
        scrollPosicionRef.current = 0;
      }

      contenedor.scrollTop = scrollPosicionRef.current;
      animacionRef.current = requestAnimationFrame(avanzarScroll);
    };

    animacionRef.current = requestAnimationFrame(avanzarScroll);

    return () => {
      if (animacionRef.current) {
        cancelAnimationFrame(animacionRef.current);
      }
    };
  }, [videos, isLoading]);

  useEffect(() => {
    return () => {
      if (pausaManualTimerRef.current) {
        clearTimeout(pausaManualTimerRef.current);
      }
    };
  }, []);

  const videosScroll = videos.length ? [...videos, ...videos] : [];

  return (
    <section
      className="videos-scroll-section mb-4"
      aria-label="Últimos videos del canal de YouTube"
    >
      <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
        <h3 className="videos-scroll-header h6 text-muted text-uppercase mb-0 d-flex align-items-center gap-2">
          <FontAwesomeIcon icon={faYoutube} className="text-danger" />
          Últimos videos
        </h3>
        {isOffline && !isLoading && (
          <span
            className="badge rounded-pill text-bg-secondary"
            style={{ fontSize: "0.65rem", fontWeight: 500 }}
          >
            Sin conexión
          </span>
        )}
      </div>

      <div
        ref={contenedorRef}
        className={`videos-scroll-viewport${isPaused ? " is-paused" : ""}`}
        onMouseEnter={() => {
          pausaHoverRef.current = true;
          setIsPaused(true);
        }}
        onMouseLeave={() => {
          pausaHoverRef.current = false;
          if (!pausaManualRef.current) setIsPaused(false);
        }}
        onFocus={() => {
          pausaHoverRef.current = true;
          setIsPaused(true);
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            pausaHoverRef.current = false;
            if (!pausaManualRef.current) setIsPaused(false);
          }
        }}
        onWheel={pausarTemporalmente}
        onTouchStart={pausarTemporalmente}
        tabIndex={0}
        aria-live="polite"
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <VideoSkeleton />
            <VideoSkeleton />
            <VideoSkeleton />
            <span className="visually-hidden">Cargando videos...</span>
          </>
        ) : (
          videosScroll.map((video, index) => (
            <a
              key={`${video.videoId}-${index}`}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-reset d-block"
              aria-label={`Ver en YouTube: ${video.title}`}
            >
              <article className="video-scroll-card d-flex mb-3 p-2 rounded align-items-stretch bg-body shadow-sm">
                <div className="video-scroll-thumbnail">
                  <img
                    src={video.thumbnail}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="video-scroll-play" aria-hidden="true">
                    <span className="video-scroll-play-icon">
                      <FontAwesomeIcon icon={faPlay} />
                    </span>
                  </span>
                </div>

                <div className="d-flex flex-column justify-content-center min-w-0 ps-1">
                  <h4 className="video-scroll-title fs-6 fw-semibold mb-1">
                    {video.title}
                  </h4>
                  {video.published && (
                    <time
                      className="small text-muted"
                      dateTime={new Date(video.published).toISOString()}
                    >
                      {formatRelativeDate(video.published)}
                    </time>
                  )}
                </div>
              </article>
            </a>
          ))
        )}
      </div>

      {!isLoading && (
        <div className="mt-2 pt-2 d-flex justify-content-end border-top border-secondary-subtle">
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-danger d-inline-flex align-items-center gap-1"
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              borderRadius: "4px",
            }}
          >
            Ver canal en YouTube
            <FaArrowRight size={10} />
          </a>
        </div>
      )}

      {isLoading && (
        <div className="d-flex justify-content-center py-2">
          <Spinner animation="border" size="sm" role="status">
            <span className="visually-hidden">Cargando videos...</span>
          </Spinner>
        </div>
      )}
    </section>
  );
};

export default UltimosVideosScroll;
