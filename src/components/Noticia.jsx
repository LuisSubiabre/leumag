import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaCheck,
  FaChevronRight,
  FaClock,
  FaFacebookF,
  FaLink,
  FaNewspaper,
  FaShareAlt,
  FaStop,
  FaVolumeUp,
  FaWhatsapp,
} from "react-icons/fa";
import { Page, Section } from "./ui/Page";
import { NewsCard } from "./ui/NewsGrid";
import { Lightbox } from "./ui/Lightbox";
import { copiarAlPortapapeles } from "../services/clipboard";
import "./Noticia.css";

const WP_API = "https://portal.liceoexperimental.cl/wp-json/wp/v2";

// Categorías con página propia en el sitio
const CATEGORIAS = {
  caa: { label: "Centro de Alumnos", to: "/CentroDeAlumnos" },
  acles: { label: "ACLE", to: "/Acle" },
  acle: { label: "ACLE", to: "/Acle" },
};
const CATEGORIA_GENERAL = "noticias";

const formatoFecha = new Intl.DateTimeFormat("es-CL", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

// Convierte entidades HTML (&#8220; etc.) en texto plano
const decodificar = (html = "") => {
  const area = document.createElement("textarea");
  area.innerHTML = html;
  return area.value;
};

const textoPlano = (html = "") =>
  decodificar(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

const toNoticia = (post) => {
  const terms = post._embedded?.["wp:term"]?.[0] ?? [];
  const texto = textoPlano(post.content.rendered);
  return {
    id: post.id,
    titulo: decodificar(post.title.rendered),
    tituloHtml: post.title.rendered,
    contenido: post.content.rendered,
    texto,
    link: post.link,
    fecha: post.date,
    minutos: Math.max(1, Math.round(texto.split(" ").length / 200)),
    imagen: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
    categorias: terms
      .filter((t) => t.slug !== CATEGORIA_GENERAL)
      .map((t) => ({ id: t.id, slug: t.slug, label: CATEGORIAS[t.slug]?.label ?? t.name, to: CATEGORIAS[t.slug]?.to })),
  };
};

/* ---------- Datos ---------- */

function useNoticia(id) {
  const [state, setState] = useState({ status: "loading", noticia: null });

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading", noticia: null });

    fetch(`${WP_API}/posts/${id}?_embed=wp:featuredmedia,wp:term`, { signal: controller.signal })
      .then(async (res) => {
        if (res.status === 404 || res.status === 400) return setState({ status: "notfound", noticia: null });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setState({ status: "ok", noticia: toNoticia(await res.json()) });
      })
      .catch((error) => {
        if (controller.signal.aborted) return;
        console.error("Error al cargar la noticia:", error);
        setState({ status: "error", noticia: null });
      });

    return () => controller.abort();
  }, [id]);

  return state;
}

function useRelacionadas(noticia) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!noticia) return;
    const controller = new AbortController();
    const cats = noticia.categorias.map((c) => c.id).join(",");
    const params = new URLSearchParams({
      per_page: "3",
      exclude: String(noticia.id),
      _embed: "wp:featuredmedia",
      ...(cats && { categories: cats }),
    });

    fetch(`${WP_API}/posts?${params}`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : []))
      .then((data) =>
        setPosts(
          (Array.isArray(data) ? data : []).map((p) => ({
            ...p,
            featuredMedia: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
          })),
        ),
      )
      .catch(() => {});

    return () => controller.abort();
  }, [noticia]);

  return posts;
}

/* ---------- Piezas de la página ---------- */

function BarraProgreso() {
  const ref = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="noticia-progreso" aria-hidden="true">
      <span ref={ref} />
    </div>
  );
}

const vozEspanol = () => {
  const voces = window.speechSynthesis.getVoices();
  const preferidas = ["es-CL", "es-419", "es-US", "es-MX", "es-AR"];
  return (
    preferidas.map((lang) => voces.find((v) => v.lang === lang)).find(Boolean) ??
    voces.find((v) => v.lang?.startsWith("es")) ??
    null
  );
};

function BotonEscuchar({ texto }) {
  const [leyendo, setLeyendo] = useState(false);
  const soportado = typeof window !== "undefined" && "speechSynthesis" in window;

  // Detener la lectura al salir de la noticia
  useEffect(() => () => soportado && window.speechSynthesis.cancel(), [soportado]);

  if (!soportado) return null;

  const toggle = () => {
    const synth = window.speechSynthesis;
    if (leyendo) {
      synth.cancel();
      setLeyendo(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "es-CL";
    const voz = vozEspanol();
    if (voz) utterance.voice = voz;
    utterance.onend = () => setLeyendo(false);
    utterance.onerror = () => setLeyendo(false);
    synth.cancel();
    synth.speak(utterance);
    setLeyendo(true);
  };

  return (
    <button
      type="button"
      className={`noticia-tool${leyendo ? " is-active" : ""}`}
      onClick={toggle}
      aria-pressed={leyendo}
    >
      {leyendo ? <FaStop aria-hidden="true" /> : <FaVolumeUp aria-hidden="true" />}
      <span>{leyendo ? "Detener" : "Escuchar"}</span>
    </button>
  );
}

function Compartir({ noticia }) {
  const [copiado, setCopiado] = useState(false);
  const timer = useRef(0);
  const url = window.location.href;
  const puedeCompartir = typeof navigator !== "undefined" && typeof navigator.share === "function";

  useEffect(() => () => clearTimeout(timer.current), []);

  const copiar = async () => {
    if (await copiarAlPortapapeles(url)) {
      setCopiado(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopiado(false), 2000);
    }
  };

  const compartirNativo = () => {
    navigator.share({ title: noticia.titulo, url }).catch(() => {});
  };

  const resumen = noticia.texto.slice(0, 180) + (noticia.texto.length > 180 ? "…" : "");

  return (
    <div className="noticia-share" role="group" aria-label="Compartir noticia">
      {puedeCompartir && (
        <button type="button" className="noticia-tool" onClick={compartirNativo}>
          <FaShareAlt aria-hidden="true" />
          <span>Compartir</span>
        </button>
      )}
      <a
        className="noticia-tool noticia-tool--icon noticia-tool--whatsapp"
        href={`https://wa.me/?text=${encodeURIComponent(`${noticia.titulo}\n\n${resumen}\n\n${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
      {/* Facebook usa el enlace de WordPress, que trae la imagen y descripción */}
      <a
        className="noticia-tool noticia-tool--icon noticia-tool--facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(noticia.link)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en Facebook"
        title="Facebook"
      >
        <FaFacebookF aria-hidden="true" />
      </a>
      <button
        type="button"
        className={`noticia-tool noticia-tool--icon${copiado ? " is-done" : ""}`}
        onClick={copiar}
        aria-label={copiado ? "Enlace copiado" : "Copiar enlace"}
        title={copiado ? "¡Copiado!" : "Copiar enlace"}
      >
        {copiado ? <FaCheck aria-hidden="true" /> : <FaLink aria-hidden="true" />}
      </button>
      <span className="visually-hidden" aria-live="polite">
        {copiado ? "Enlace copiado" : ""}
      </span>
    </div>
  );
}

function Migas({ titulo }) {
  return (
    <nav className="noticia-migas" aria-label="Ruta de navegación">
      <Link to="/">Inicio</Link>
      <FaChevronRight aria-hidden="true" />
      <Link to="/Noticias">Noticias</Link>
      {titulo && (
        <>
          <FaChevronRight aria-hidden="true" />
          <span aria-current="page">{titulo}</span>
        </>
      )}
    </nav>
  );
}

function Esqueleto() {
  return (
    <div className="noticia-skeleton" aria-busy="true" aria-label="Cargando noticia">
      <span className="lp-skeleton lp-skeleton--short" />
      <span className="lp-skeleton noticia-skeleton__title" />
      <span className="lp-skeleton noticia-skeleton__title noticia-skeleton__title--short" />
      <span className="lp-skeleton noticia-skeleton__media" />
      <span className="lp-skeleton" />
      <span className="lp-skeleton" />
      <span className="lp-skeleton lp-skeleton--short" />
    </div>
  );
}

/* ---------- Página ---------- */

const Noticia = () => {
  const { id } = useParams();
  const { status, noticia } = useNoticia(id);
  const relacionadas = useRelacionadas(noticia);
  const contenidoRef = useRef(null);
  const [foto, setFoto] = useState(null);
  const [fotos, setFotos] = useState([]);
  const [heroAbierta, setHeroAbierta] = useState(false);

  // Título de la pestaña
  useEffect(() => {
    if (!noticia) return;
    const anterior = document.title;
    document.title = `${noticia.titulo} | Liceo Experimental UMAG`;
    return () => {
      document.title = anterior;
    };
  }, [noticia]);

  // Reúne las fotos del contenido para el visor
  useEffect(() => {
    const el = contenidoRef.current;
    if (!el) return;
    const imgs = [...el.querySelectorAll("img")];
    imgs.forEach((img, i) => {
      img.dataset.index = String(i);
      img.loading = "lazy";
      img.tabIndex = 0;
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", `Ampliar foto ${i + 1}${img.alt ? `: ${img.alt}` : ""}`);
    });
    setFotos(imgs.map((img) => ({ src: img.dataset.fullUrl || img.currentSrc || img.src, alt: img.alt })));
  }, [noticia]);

  const abrirFoto = useCallback((event) => {
    const img = event.target.closest?.("img[data-index]");
    if (!img) return;
    if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    setFoto(Number(img.dataset.index));
  }, []);

  const cerrarFoto = useCallback(() => setFoto(null), []);
  const cerrarHero = useCallback(() => setHeroAbierta(false), []);
  const heroImagenes = useMemo(
    () => (noticia?.imagen ? [{ src: noticia.imagen, alt: noticia.titulo }] : []),
    [noticia],
  );

  const fecha = useMemo(
    () => (noticia ? formatoFecha.format(new Date(noticia.fecha)) : ""),
    [noticia],
  );

  if (status === "loading") {
    return (
      <Page narrow>
        <Migas />
        <Esqueleto />
      </Page>
    );
  }

  if (status !== "ok") {
    return (
      <Page narrow>
        <Migas />
        <div className="lp-empty noticia-estado">
          <FaNewspaper aria-hidden="true" />
          <h1 className="noticia-estado__title">
            {status === "notfound" ? "Noticia no encontrada" : "No pudimos cargar la noticia"}
          </h1>
          <p>
            {status === "notfound"
              ? "La noticia que buscas no existe o ya no está disponible."
              : "Revisa tu conexión e intenta nuevamente en unos minutos."}
          </p>
          <Link to="/Noticias" className="lp-btn">
            <FaArrowLeft size={12} aria-hidden="true" />
            Ver todas las noticias
          </Link>
        </div>
      </Page>
    );
  }

  return (
    <>
      <BarraProgreso />
      <Page narrow className="noticia-page">
        <Migas titulo={noticia.titulo} />

        <article>
          <header className="noticia-header">
            {noticia.categorias.length > 0 && (
              <div className="noticia-cats">
                {noticia.categorias.map((cat) =>
                  cat.to ? (
                    <Link key={cat.id} to={cat.to} className="noticia-cat">
                      {cat.label}
                    </Link>
                  ) : (
                    <span key={cat.id} className="noticia-cat">
                      {cat.label}
                    </span>
                  ),
                )}
              </div>
            )}

            <h1 className="noticia-title" dangerouslySetInnerHTML={{ __html: noticia.tituloHtml }} />

            <div className="noticia-meta">
              <span>
                <FaCalendarAlt aria-hidden="true" />
                <time dateTime={noticia.fecha}>{fecha}</time>
              </span>
              <span>
                <FaClock aria-hidden="true" />
                {noticia.minutos} min de lectura
              </span>
            </div>

            <div className="noticia-toolbar">
              <BotonEscuchar texto={`${noticia.titulo}. ${noticia.texto}`} />
              <Compartir noticia={noticia} />
            </div>
          </header>

          {noticia.imagen && (
            <figure
              className="noticia-hero"
              style={{ "--hero-img": `url("${noticia.imagen}")` }}
            >
              <button
                type="button"
                className="noticia-hero__btn"
                onClick={() => setHeroAbierta(true)}
                aria-label="Ampliar imagen destacada"
              >
                <img src={noticia.imagen} alt="" />
              </button>
            </figure>
          )}

          <div
            ref={contenidoRef}
            className="noticia-prose"
            onClick={abrirFoto}
            onKeyDown={abrirFoto}
            dangerouslySetInnerHTML={{ __html: noticia.contenido }}
          />

          <footer className="noticia-footer">
            <Link to="/Noticias" className="lp-btn lp-btn--ghost">
              <FaArrowLeft size={12} aria-hidden="true" />
              Todas las noticias
            </Link>
            <Compartir noticia={noticia} />
          </footer>
        </article>

        {relacionadas.length > 0 && (
          <Section id="relacionadas" kicker="Sigue leyendo" title="Más noticias">
            <div className="lp-news-grid noticia-relacionadas">
              {relacionadas.map((post) => (
                <NewsCard key={post.id} post={post} />
              ))}
            </div>
          </Section>
        )}
      </Page>

      <Lightbox images={fotos} index={foto} onClose={cerrarFoto} onChange={setFoto} />
      <Lightbox
        images={heroImagenes}
        index={heroAbierta ? 0 : null}
        onClose={cerrarHero}
        onChange={() => {}}
      />
    </>
  );
};

export default Noticia;
