import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation, faLocationDot, faMailBulk, faPhone, faPlay, faSchoolFlag, faStop } from '@fortawesome/free-solid-svg-icons';

const ArticleReader = ({ articleText }) => {

    const [isReading, setIsReading] = useState(false);
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const getVoices = () => {
            const availableVoices = synth.getVoices();
            const spanishVoices = availableVoices.filter(voice => voice.lang === 'es-LA' || voice.lang === 'es-MX');
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
        <div className='py-4' style={{ textAlign: 'right' }}>
            <button onClick={handleReadClick}>
                {isReading ? <FontAwesomeIcon icon={faStop} /> : <FontAwesomeIcon icon={faPlay} />}
                {isReading ? ' Detener Lectura' : ' Leer Artículo'}
            </button>
        </div>
    );
};

export default ArticleReader;
