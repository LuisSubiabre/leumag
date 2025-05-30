import axios from "axios";
import * as cheerio from "cheerio";

export const scrapeNoticias = async () => {
  try {
    const url = encodeURIComponent(
      "https://sites.google.com/liceoexperimental.cl/proyectonutricionydietetica/noticias"
    );
    const response = await axios.get(
      `https://api.allorigins.win/raw?url=${url}`
    );

    const $ = cheerio.load(response.data);
    const noticias = [];

    // Buscar específicamente en las secciones de noticias
    $("section.yaqOZd").each((index, element) => {
      const $element = $(element);

      // Buscar el título en el h1
      const titulo = $element.find("h1 .C9DxTc").text().trim();

      // Buscar el contenido en los párrafos
      const contenido = $element.find("p .C9DxTc").text().trim();

      if (titulo && contenido) {
        const fecha = extraerFecha(contenido);
        noticias.push({
          titulo,
          contenido,
          fecha,
          fechaOrden: fecha
            ? new Date(fecha.split("/").reverse().join("-"))
            : new Date(0),
        });
      }
    });

    // Si no encontramos noticias, intentar con una estrategia alternativa
    if (noticias.length === 0) {
      $(".hJDwNd-AhqUyc-uQSCkd").each((index, element) => {
        const $element = $(element);
        const titulo = $element.find("h1 .C9DxTc").text().trim();
        const contenido = $element.find("p .C9DxTc").text().trim();

        if (titulo && contenido) {
          const fecha = extraerFecha(contenido);
          noticias.push({
            titulo,
            contenido,
            fecha,
            fechaOrden: fecha
              ? new Date(fecha.split("/").reverse().join("-"))
              : new Date(0),
          });
        }
      });
    }

    // Ordenar las noticias por fecha (más recientes primero)
    noticias.sort((a, b) => b.fechaOrden - a.fechaOrden);

    // Eliminar la propiedad fechaOrden antes de devolver
    return noticias.map(({ fechaOrden, ...noticia }) => noticia);
  } catch (error) {
    console.error("Error al realizar el scraping:", error);
    return [
      {
        titulo: "No se pudieron cargar las noticias",
        contenido:
          "Por favor, intente nuevamente más tarde o contacte al administrador.",
        fecha: new Date().toLocaleDateString(),
      },
    ];
  }
};

const extraerFecha = (contenido) => {
  // Buscar fechas en formato DD/MM/YYYY
  const fechaRegex = /(\d{2}\/\d{2}\/\d{4})/;
  const match = contenido.match(fechaRegex);

  if (match) {
    const fecha = match[1];
    // Validar que la fecha sea válida
    const [dia, mes, anio] = fecha.split("/");
    const fechaObj = new Date(anio, mes - 1, dia);
    if (fechaObj.toString() !== "Invalid Date") {
      return fecha;
    }
  }

  return null;
};
