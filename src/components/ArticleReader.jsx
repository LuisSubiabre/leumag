import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const ArticleReader = ({ articleText }) => {
  const [isReading, setIsReading] = useState(false);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const getVoices = () => {
      const availableVoices = synth.getVoices();
      const spanishVoices = availableVoices.filter(
        (voice) => voice.lang === "es-LA" || voice.lang === "es-MX"
      );
      setVoices(spanishVoices);
    };

    getVoices();
    synth.onvoiceschanged = getVoices; // Actualiza las voces cuando cambian
  }, []);

  const handleReadClick = () => {
    const regex = /(<([^>]+)>)/gi;
    const articleText2 = articleText.replace(regex, "");
    if (!isReading) {
      const utterance = new SpeechSynthesisUtterance(articleText2);
      utterance.voice = voices[0]; // Selecciona la primera voz en español latino
      utterance.onend = () => setIsReading(false);
      window.speechSynthesis.speak(utterance);
      setIsReading(true);
    } else {
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
  };

  return (
    <div className="py-4 d-flex justify-content-end">
      <button
        onClick={handleReadClick}
        className={`btn d-flex align-items-center gap-2 px-3 py-2 text-uppercase fw-bold ${
          isReading ? "btn-danger" : "btn-info"
        }`}
        style={{
          fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
          letterSpacing: "0.5px",
          whiteSpace: "nowrap",
          transition: "all 0.3s ease",
        }}
        title={
          isReading
            ? "Detener lectura del artículo"
            : "Leer artículo en voz alta"
        }
      >
        {isReading ? (
          <FontAwesomeIcon icon={faStop} size="sm" />
        ) : (
          <FontAwesomeIcon icon={faPlay} size="sm" />
        )}
        <span className="d-none d-sm-inline">
          {isReading ? "Detener Lectura" : "Leer Artículo"}
        </span>
      </button>
    </div>
  );
};

ArticleReader.propTypes = {
  articleText: PropTypes.string.isRequired,
};

export default ArticleReader;
