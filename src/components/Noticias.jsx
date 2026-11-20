import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaNewspaper, FaSearch, FaTimes } from "react-icons/fa";
import { Page, PageHeader } from "./ui/Page";
import { NewsCard, NewsCardSkeleton } from "./ui/NewsGrid";
import "./Noticias.css";

const POSTS_URL = "https://portal.liceoexperimental.cl/wp-json/wp/v2/posts";
const PER_PAGE = 12;
const SEARCH_DELAY_MS = 400;

const toPost = (post) => ({
  ...post,
  featuredMedia: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
});

const Noticias = () => {
  const [posts, setPosts] = useState([]);
  // La búsqueda y la página van juntas para que una búsqueda nueva
  // vuelva a la página 1 con una sola petición.
  const [request, setRequest] = useState({ query: "", page: 1 });
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const sentinelRef = useRef(null);

  // Espera a que el usuario deje de escribir antes de consultar la API
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const query = searchTerm.trim();
      setRequest((prev) => (prev.query === query ? prev : { query, page: 1 }));
    }, SEARCH_DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  useEffect(() => {
    const controller = new AbortController();
    const { query, page } = request;

    const loadPosts = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(POSTS_URL, {
          params: {
            page,
            per_page: PER_PAGE,
            _embed: "wp:featuredmedia",
            ...(query && { search: query }),
          },
          signal: controller.signal,
        });

        const newPosts = response.data.map(toPost);
        setPosts((prevPosts) =>
          page === 1
            ? newPosts
            : [
                ...prevPosts,
                // Filtrar posts duplicados
                ...newPosts.filter(
                  (newPost) => !prevPosts.some((post) => post.id === newPost.id),
                ),
              ],
        );
        setHasMore(response.data.length === PER_PAGE);
      } catch (err) {
        if (axios.isCancel(err)) return;
        // WordPress responde 400 cuando se pide una página más allá del final
        if (err.response?.status === 400 && page > 1) {
          setHasMore(false);
        } else {
          console.error("Error al cargar noticias:", err);
          setError(true);
          setHasMore(false);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadPosts();

    return () => controller.abort();
  }, [request]);

  // Carga la página siguiente cuando el final de la lista entra en pantalla
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || loading || !hasMore) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setRequest((prev) => ({ ...prev, page: prev.page + 1 }));
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, [loading, hasMore]);

  const isFirstLoad = loading && request.page === 1;
  // La noticia más reciente se destaca solo en el listado general
  const destacada = !request.query && !isFirstLoad ? posts[0] : null;
  const resto = destacada ? posts.slice(1) : posts;

  return (
    <Page className="noticias-page">
      <PageHeader
        icon={FaNewspaper}
        kicker="Actualidad"
        title="Noticias"
        lead="Actividades, logros y novedades de nuestra comunidad escolar."
      >
        <form
          className="noticias-search"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <FaSearch className="noticias-search__icon" aria-hidden="true" />
          <input
            type="search"
            className="noticias-search__input"
            placeholder="Buscar noticias…"
            aria-label="Buscar noticias"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              type="button"
              className="noticias-search__clear"
              onClick={() => setSearchTerm("")}
              aria-label="Limpiar búsqueda"
            >
              <FaTimes aria-hidden="true" />
            </button>
          )}
        </form>
      </PageHeader>

      {request.query && !isFirstLoad && posts.length > 0 && (
        <p className="noticias-resultados" aria-live="polite">
          Resultados para <strong>“{request.query}”</strong>
        </p>
      )}

      {destacada && (
        <div className="noticias-destacada" data-reveal>
          <NewsCard post={destacada} featured />
        </div>
      )}

      {isFirstLoad ? (
        <div className="lp-news-grid" aria-busy="true" aria-label="Cargando noticias">
          {Array.from({ length: 6 }, (_, i) => (
            <NewsCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        resto.length > 0 && (
          <div className="lp-news-grid">
            {resto.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
            {loading &&
              [0, 1, 2].map((i) => <NewsCardSkeleton key={`more-${i}`} />)}
          </div>
        )
      )}

      {!loading && posts.length === 0 && (
        <div className="lp-empty">
          <FaNewspaper aria-hidden="true" />
          <p>
            {error
              ? "No pudimos cargar las noticias. Intenta nuevamente más tarde."
              : request.query
                ? `No se encontraron noticias para “${request.query}”.`
                : "No hay noticias disponibles por ahora."}
          </p>
        </div>
      )}

      <div ref={sentinelRef} aria-hidden="true" />

      {!hasMore && !error && posts.length > 0 && (
        <p className="noticias-fin">Has llegado al final de las noticias.</p>
      )}
    </Page>
  );
};

export default Noticias;
