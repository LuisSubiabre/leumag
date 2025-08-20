import { useEffect, useState, useCallback } from "react";
import "./UltimosVideos.css";

// Función para decodificar entidades HTML
const decodeHtmlEntities = (text) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

// Datos estáticos como respaldo
const fallbackVideos = [
  {
    title: "Liceo Experimental UMAG - Actividades 2024",
    link: "https://www.youtube.com/@LiceoExperimentalUmag",
    videoId: "demo1",
    thumbnail: "/images/bannerumag.png",
    published: "2024-01-01",
  },
  {
    title: "Canal oficial del Liceo Experimental UMAG",
    link: "https://www.youtube.com/@LiceoExperimentalUmag",
    videoId: "demo2",
    thumbnail: "/images/bannerumag.png",
    published: "2024-01-01",
  },
  {
    title: "Visita nuestro canal de YouTube",
    link: "https://www.youtube.com/@LiceoExperimentalUmag",
    videoId: "demo3",
    thumbnail: "/images/bannerumag.png",
    published: "2024-01-01",
  },
];

export default function UltimosVideos() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  const fetchVideos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setUsingFallback(false);

      const channelId = "UCrR4xpjHUVkhhSDhMLEqIOw"; // Canal LeumagTV

      // Método 1: Intentar con RSS2JSON API
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
        );

        if (response.ok) {
          const data = await response.json();

          if (data.status === "ok" && data.items && data.items.length > 0) {
            const videosData = data.items.slice(0, 6).map((item) => {
              const videoId = item.link.split("v=")[1];
              return {
                title: decodeHtmlEntities(item.title || "Sin título"),
                link: item.link,
                videoId: videoId,
                thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
                published: item.pubDate,
              };
            });

            setVideos(videosData);
            return; // Éxito, salir de la función
          }
        }
      } catch (rssError) {
        console.log("RSS2JSON falló, intentando con Invidious:", rssError);
      }

      // Método 2: Intentar con Invidious API
      try {
        const invidiousResponse = await fetch(
          `https://invidious.snopyta.org/api/v1/channels/${channelId}/videos`
        );

        if (invidiousResponse.ok) {
          const invidiousData = await invidiousResponse.json();

          if (invidiousData && invidiousData.length > 0) {
            const videosData = invidiousData.slice(0, 6).map((video) => ({
              title: decodeHtmlEntities(video.title || "Sin título"),
              link: `https://www.youtube.com/watch?v=${video.videoId}`,
              videoId: video.videoId,
              thumbnail: `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`,
              published: video.published,
            }));

            setVideos(videosData);
            return; // Éxito, salir de la función
          }
        }
      } catch (invidiousError) {
        console.log(
          "Invidious falló, usando datos de respaldo:",
          invidiousError
        );
      }

      // Si todos los métodos fallan, usar datos de respaldo
      throw new Error("No se pudieron cargar los videos del canal");
    } catch (err) {
      console.error("Error al cargar videos:", err);
      // Usar datos de respaldo en lugar de mostrar error
      setVideos(fallbackVideos);
      setUsingFallback(true);
      setError(null); // No mostrar error si tenemos datos de respaldo
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Carga inicial
    fetchVideos();

    // Actualización automática cada 15 minutos
    const interval = setInterval(() => {
      fetchVideos();
    }, 15 * 60 * 1000); // 15 minutos

    // Actualización cuando el usuario regresa a la pestaña
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchVideos();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Limpieza al desmontar
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [fetchVideos]);

  if (loading && !videos.length) {
    return (
      <div className="videos-container">
        <div className="videos-header">
          <h2>Últimos videos</h2>
          <div className="loading-spinner"></div>
        </div>
        <div className="loading">
          <p>Cargando videos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="videos-container">
      <div className="videos-header">
        <h2>Últimos videos</h2>
        {usingFallback && (
          <div className="offline-badge">
            <span>Modo offline</span>
          </div>
        )}
      </div>

      {loading && (
        <div className="updating-indicator">
          <p>Actualizando videos...</p>
        </div>
      )}

      {error && !usingFallback && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      <div className="videos-grid">
        {videos.map((video, index) => (
          <div key={video.videoId} className="video-card">
            <a
              href={video.link}
              target="_blank"
              rel="noreferrer"
              className="video-link"
            >
              <div className="video-thumbnail">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/images/404.png";
                    e.target.alt = "Imagen no disponible";
                  }}
                />
                <div className="play-overlay">
                  <div className="play-button">▶</div>
                </div>
                <div className="video-number">{index + 1}</div>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                {video.published && (
                  <p className="video-date">
                    {new Date(video.published).toLocaleDateString("es-CL")}
                  </p>
                )}
              </div>
            </a>
          </div>
        ))}
      </div>

      {videos.length === 0 && !loading && !error && (
        <div className="no-videos">
          <p>No hay videos disponibles en este momento.</p>
        </div>
      )}

      <div className="videos-footer">
        <a
          href="https://www.youtube.com/@LiceoExperimentalUmag"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary youtube-btn"
        >
          Ver todos los videos
        </a>
      </div>
    </div>
  );
}
