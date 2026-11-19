import { useEffect, useState } from "react";

const WP_API = "https://portal.liceoexperimental.cl/wp-json/wp/v2";

/**
 * Noticias de WordPress filtradas por categoría (slug).
 * Usa `_embed` para traer la imagen destacada en la misma petición.
 *
 * @param {string[]} slugs   slugs posibles de la categoría (ej. ["acle", "acles"])
 * @param {number}   perPage cantidad máxima de noticias
 * @returns {{ posts: object[], loading: boolean, error: boolean }}
 */
export function useWpCategoryPosts(slugs, perPage = 12) {
  const [state, setState] = useState({ posts: [], loading: true, error: false });
  const slugKey = slugs.join(",");

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const load = async () => {
      try {
        const catRes = await fetch(`${WP_API}/categories?slug=${slugKey}`, { signal });
        const categories = await catRes.json();
        if (!Array.isArray(categories) || categories.length === 0) {
          setState({ posts: [], loading: false, error: false });
          return;
        }

        const ids = categories.map((cat) => cat.id).join(",");
        const postsRes = await fetch(
          `${WP_API}/posts?categories=${ids}&per_page=${perPage}&_embed=wp:featuredmedia`,
          { signal },
        );
        const raw = await postsRes.json();
        const posts = (Array.isArray(raw) ? raw : []).map((post) => ({
          ...post,
          featuredMedia: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
        }));

        setState({ posts, loading: false, error: false });
      } catch (error) {
        if (signal.aborted) return;
        console.error("Error al cargar noticias de WordPress:", error);
        setState({ posts: [], loading: false, error: true });
      }
    };

    load();
    return () => controller.abort();
  }, [slugKey, perPage]);

  return state;
}
