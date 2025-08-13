import { useEffect, useState, useCallback } from "react";
import "./UltimosVideos.css";

export default function UltimosVideos() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchVideos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const channelId = "UCrR4xpjHUVkhhSDhMLEqIOw"; // Tu canal LeumagTV
      const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Parsear el XML
      const parser = new DOMParser();
      const xml = parser.parseFromString(data.contents, "text/xml");
      const entries = xml.getElementsByTagName("entry");

      const videosData = Array.from(entries)
        .slice(0, 6) // Limitar a 6 videos
        .map((entry) => {
          const title = entry.getElementsByTagName("title")[0].textContent;
          const link = entry
            .getElementsByTagName("link")[0]
            .getAttribute("href");
          const videoId = link.split("v=")[1];
          const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          const published =
            entry.getElementsByTagName("published")[0].textContent;

          return { title, link, videoId, thumbnail, published };
        });

      setVideos(videosData);
    } catch (err) {
      console.error("Error al cargar videos:", err);
      setError("No se pudieron cargar los videos. Inténtalo más tarde.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Carga inicial
    fetchVideos();

    // Actualización automática cada 5 minutos
    const interval = setInterval(() => {
      fetchVideos();
    }, 5 * 60 * 1000); // 5 minutos

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

  if (error && !videos.length) {
    return (
      <div className="videos-container">
        <div className="videos-header">
          <h2>Últimos videos</h2>
        </div>
        <div className="error">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="videos-container">
      <div className="videos-header">
        <h2>Últimos videos</h2>
      </div>

      {loading && (
        <div className="updating-indicator">
          <p>Actualizando videos...</p>
        </div>
      )}

      {error && (
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
                    e.target.src = "/src/assets/img/404.png";
                    e.target.alt = "Imagen no disponible";
                  }}
                />
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
          className="btn btn-primary"
          style={{
            fontSize: "1.1rem",
            padding: "10px 20px",
            borderRadius: "30px",
            fontWeight: "600",
            boxShadow: "0 4px 8px rgba(0, 123, 255, 0.3)",
            transition: "all 0.3s ease",
            textDecoration: "none",
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
          Ver todos los videos
        </a>
      </div>
    </div>
  );
}
