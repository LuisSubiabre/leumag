/**
 * Copia texto al portapapeles. Devuelve true si lo logró.
 * Usa la Clipboard API y, si no está disponible (navegador antiguo o sin
 * HTTPS), un respaldo con execCommand.
 */
export async function copiarAlPortapapeles(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = texto;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}
