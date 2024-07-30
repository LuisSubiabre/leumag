import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { faEnvelope, faLocation, faLocationDot, faMailBulk, faPhone, faSchoolFlag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer className="footer-bg text-center text-lg-start">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        {/* <span>Conéctate con nuestras redes sociales:</span> */}
                    </div>

                    <div>
                        <a href="https://www.facebook.com/leumagoficial" target="_blank" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.youtube.com/leumagtv" target="_blank" className=" me-4 text-reset">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="https://www.instagram.com/leumagoficial/" target="_blank" className=" me-4 text-reset">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>

                </section >



                <section className="small" >
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Liceo Experimental Umag
                                </h6>
                                <p>
                                    Institución educativa de excelencia, formando niños/as y jóvenes a través de una educación humana y académica, para que éstos al alcanzar su madurez, sean un real aporte a la sociedad chilena.
                                </p>
                            </div>


                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Principal
                                </h6>
                                <p>
                                    <Link to={'/'} className="text-reset">Inicio</Link>
                                </p>
                                <p>
                                    <Link to={'/Nosotros'} className="text-reset">Nosotros</Link>
                                </p>
                                <p>
                                    <Link to={'/Estamentos'} className="text-reset">Estamentos</Link>
                                </p>
                                <p>
                                    <Link to={'/Contacto'} className="text-reset">Contacto</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Establecimiento</h6>
                                <p><FontAwesomeIcon icon={faLocationDot} /> Angamos 17</p>
                                <p>
                                    <FontAwesomeIcon icon={faEnvelope} /> leumag@liceoexperimental.cl
                                </p>
                                <p><FontAwesomeIcon icon={faPhone} /> 61 2454270</p>



                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Administración</h6>
                                <p><FontAwesomeIcon icon={faLocationDot} /> Angamos 131</p>
                                <p>
                                    <FontAwesomeIcon icon={faEnvelope} /> administracion@liceoexperimental.cl
                                </p>
                                <p> <FontAwesomeIcon icon={faPhone} /> 61 2240075</p>


                            </div>
                        </div>

                    </div>
                </section>

                <div className="text-center p-4">
                    <p>Liceo Experimental Umag</p>
                    <p>Punta Arenas, Chile</p>

                </div>

            </footer >

        </>

    );
};

export default Footer;