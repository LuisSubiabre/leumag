import { useEffect, useRef, useState } from "react";

const CHANNEL_ID = "UCrR4xpjHUVkhhSDhMLEqIOw";

const fallbackVideos = [
  {
    title: "Canal oficial del Liceo Experimental UMAG",
    link: "https://www.youtube.com/@LiceoExperimentalUmag",
    videoId: "fallback1",
  },
  {
    title: "Actividades destacadas del LEUMAG",
    link: "https://www.youtube.com/@LiceoExperimentalUmag",
    videoId: "fallback2",
  },
  {
    title: "Conoce nuestro contenido en YouTube",
    link: "https://www.youtube.com/@LiceoExperimentalUmag",
    videoId: "fallback3",
  },
];

const decodeHtmlEntities = (text = "") => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

const UltimosVideosScroll = () => {
  const [videos, setVideos] = useState([]);
  const contenedorRef = useRef(null);

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
      } catch (error) {
        setVideos(
          fallbackVideos.map((video) => ({
            ...video,
            thumbnail: "/images/bannerumag.png",
            published: "",
          })),
        );
      }
    };

    cargarVideos();
  }, []);

  useEffect(() => {
    const contenedor = contenedorRef.current;
    if (!contenedor || videos.length === 0) return;

    let scrollPosicion = 0;

    const avanzarScroll = () => {
      scrollPosicion += 0.5;
      const alturaLista = contenedor.scrollHeight / 2;

      if (alturaLista <= 0 || scrollPosicion >= alturaLista) {
        scrollPosicion = 0;
      }

      contenedor.scrollTop = scrollPosicion;
    };

    const intervaloId = setInterval(avanzarScroll, 20);
    return () => clearInterval(intervaloId);
  }, [videos]);

  const videosScroll = videos.length ? [...videos, ...videos] : [];

  return (
    <div className="mb-4">
      <h3 className="fw-bold text-center mb-3">Ultimos videos</h3>
      <div
        ref={contenedorRef}
        style={{
          maxHeight: "330px",
          overflow: "hidden",
        }}
      >
        {videosScroll.map((video, index) => (
          <a
            key={`${video.videoId}-${index}`}
            href={video.link}
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-reset"
          >
            <article
              className="d-flex mb-3 p-2 border rounded align-items-stretch bg-body shadow-sm"
              style={{ gap: "0.75rem", cursor: "pointer" }}
            >
              <div style={{ flexShrink: 0 }}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={{
                    width: "110px",
                    height: "62px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  loading="lazy"
                />
              </div>

              <div className="d-flex flex-column justify-content-center">
                <h4 className="fs-6 fw-semibold mb-1">{video.title}</h4>
                {video.published && (
                  <span className="small text-muted">
                    {new Date(video.published).toLocaleDateString("es-CL")}
                  </span>
                )}
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UltimosVideosScroll;
