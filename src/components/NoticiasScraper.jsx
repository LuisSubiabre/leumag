import { useState, useEffect, useCallback } from "react";
import { scrapeNoticias } from "../services/scrapingService";

const NoticiasScraper = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);

  const obtenerNoticias = useCallback(async () => {
    try {
      setLoading(true);
      const data = await scrapeNoticias();
      setNoticias(data);
      setError(null);
      setUltimaActualizacion(new Date());
    } catch (err) {
      setError(
        "No se pudieron cargar las noticias. Por favor, intente nuevamente más tarde."
      );
      setNoticias([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Actualización automática cada 5 minutos
  useEffect(() => {
    obtenerNoticias();

    const intervalo = setInterval(() => {
      obtenerNoticias();
    }, 5 * 60 * 1000); // 5 minutos

    return () => clearInterval(intervalo);
  }, [obtenerNoticias]);

  if (loading && noticias.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-50 rounded-lg">
        <h2 className="text-xl font-semibold text-red-600 mb-2">
          Error al cargar las noticias
        </h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center mb-2">
            Noticias del Proyecto Nutrición y Dietética
          </h1>
          {ultimaActualizacion && (
            <p className="text-sm text-gray-500">
              Última actualización: {ultimaActualizacion.toLocaleTimeString()}
            </p>
          )}
        </div>
      </div>

      {noticias.length === 0 ? (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">
            No hay noticias disponibles en este momento.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {noticias.map((noticia, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                {noticia.titulo}
              </h2>
              {noticia.fecha && (
                <p className="text-sm text-gray-500 mb-3">
                  Publicado el: {noticia.fecha}
                </p>
              )}
              <p className="text-gray-700 whitespace-pre-line">
                {noticia.contenido}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoticiasScraper;
