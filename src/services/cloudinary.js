/**
 * Pide a Cloudinary una versión optimizada de la imagen: el ancho justo y
 * el formato más liviano que acepte el navegador (WebP/AVIF).
 * Si la URL no es de Cloudinary, la devuelve tal cual.
 */
export const imagenOptimizada = (url, ancho) =>
  url.includes("res.cloudinary.com") && url.includes("/upload/")
    ? url.replace("/upload/", `/upload/f_auto,q_auto,w_${ancho}/`)
    : url;
