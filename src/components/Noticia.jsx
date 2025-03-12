import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import ArticleReader from "./ArticleReader";

const Noticia = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const response = await axios.get(
          `https://portal.liceoexperimental.cl/wp-json/wp/v2/posts/${id}`
        );
        const post = response.data;
        const featuredMediaResponse = post.featured_media
          ? await axios.get(
              `https://portal.liceoexperimental.cl/wp-json/wp/v2/media/${post.featured_media}`
            )
          : null;

        setNoticia({
          id: post.id,
          title: post.title.rendered,
          content: post.content.rendered,
          link: post.link,
          featuredMedia: featuredMediaResponse
            ? featuredMediaResponse.data.source_url
            : null,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [id]);

  if (loading) {
    return (
      <div
        className="contenedor container d-flex justify-content-center align-items-center"
        style={{ height: "30vh" }}
      >
        <div className="text-center">
          <Spinner
            animation="border"
            role="status"
            style={{ color: "#007bff", width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-3">Cargando la noticia, por favor espera...</p>
        </div>
      </div>
    );
  }

  if (!noticia) {
    return (
      <div className="contenedor container has-text-centered hero-footer-bg px-6">
        No se encontró la noticia
      </div>
    );
  }

  return (
    <>
      <div className="container contenedor px-5">
        {/* {noticia.featuredMedia && (
                    <img src={noticia.featuredMedia} alt={noticia.title} className='img-noticia' />
                )} */}
        <ArticleReader articleText={noticia.content} />
        <h1
          className="title pt-4"
          dangerouslySetInnerHTML={{ __html: noticia.title }}
        ></h1>
        <hr />
        <div
          className="content pb-6"
          dangerouslySetInnerHTML={{ __html: noticia.content }}
        ></div>
      </div>
      <div className="container py-6"></div>
    </>
  );
};

export default Noticia;
