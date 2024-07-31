import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
const RedesSociales = (props) => {
    return (
        <>
            <a href="https://www.facebook.com/leumagoficial" target="_blank" className="me-4 text-reset">
                <FontAwesomeIcon icon={faFacebook} color={props.colorRSS} />
            </a>
            <a href="https://www.youtube.com/leumagtv" target="_blank" className=" me-4 text-reset">
                <FontAwesomeIcon icon={faYoutube} color={props.colorRSS} />
            </a>
            <a href="https://www.instagram.com/leumagoficial/" target="_blank" className=" me-4 text-reset">
                <FontAwesomeIcon icon={faInstagram} color={props.colorRSS} />
            </a>
        </>
    );
};

export default RedesSociales;