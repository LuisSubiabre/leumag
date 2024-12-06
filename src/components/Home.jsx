import React, { useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import Posts from './Posts';
import { Documentos } from './Documentos';
import Externos from './Externos';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import imgComunicado from '/comunicados/com29112024.png';
import imgMatricula from '../assets/img/citacion_matricula.png';
import Carousel from 'react-bootstrap/Carousel';
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">

                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center"> {/* Added className */}
                <p>
                    <a href="https://drive.google.com/drive/folders/19ikLvNwlnBiK57-3leeCcPJyX8wrXGan?usp=sharing" target="_blank" rel="noreferrer">
                    <img src={imgMatricula} width="600" height="600" alt="Reunion de Apoderados" className='img-fluid' /></a>
                    <hr />
                    <img src={imgComunicado} width="600" height="600" alt="Reunion de Apoderados" className='img-fluid' />
                </p>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Home = () => {
    const [modalShow, setModalShow] = React.useState(true);

    useEffect(() => {
        setModalShow(true);
    }, []);

    return (
        <>
            <div className="container contenedor px-5">
                <Posts />
                <Documentos />

                <Externos />
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default Home;