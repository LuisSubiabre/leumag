import React from 'react';
import { Row, Col } from "react-bootstrap";
import Posts from './Posts';
import { Documentos } from './Documentos';
import Externos from './Externos';

const Home = () => {
    return (
        <>

            <div className="container contenedor px-5">

                <Posts />
                <Documentos />
                <Externos />
            </div>

        </>

    );
};

export default Home;