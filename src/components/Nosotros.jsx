import React from 'react';
import { Badge } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import logo from '../assets/img/logo.png';
import logoBlanco from '../assets/img/logo_fondo_blanco.png';
import logoTransparente from '../assets/img/logo_fondo_transparente.png';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
const Nosotros = () => {
    return (
        <div className="container contenedor px-5">
            <h1>Nosotros</h1>

            <p> El Liceo Experimental UMAG espera llegar a ser en la Región de Magallanes la institución educativa de excelencia, formando niños/as y jóvenes a través de una educación humana y académica, para que éstos al alcanzar su madurez, sean un real aporte a la sociedad chilena. </p>

            <p>La misión del Liceo Experimental expresa lo siguiente: Educar a niños/as y jóvenes de la sociedad Magallánica a través de la construcción de conocimiento científico- humanista y de valores universales: ambientalistas, de solidaridad, respeto y honestidad, de manera de formar personas íntegras que aporten al desarrollo de la sociedad, con capacidad para enfrentar los desafíos del mundo actual.</p>
            <hr />

            <h2>Información:</h2>
            <p> <Badge bg="primary">RBD: 24327</Badge></p>
            <p> <Badge bg="primary">Director: Nelson Patricio Bravo Jorquera</Badge></p>
            <p> <Badge bg="primary">Dependencia: Particular Subvencionado</Badge></p>
            <p> <Badge bg="primary">Niveles: Pre-Kinder - IV Medio </Badge></p>
            <p> <Badge bg="primary">Orientación: Laica </Badge></p>
            <p> <Badge bg="primary">Uniforme:     Uniforme propio </Badge></p>
            <hr />

            <h2>Misión y Visión</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Misión</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Educar a niños/as y jóvenes de la sociedad magallánica a través de la construcción de conocimiento científico- humanista y de valores universales: ambientalistas, de solidaridad, respeto y honestidad, de manera de formar personas íntegras que aporten al desarrollo de la sociedad, con capacidad para enfrentar los desafíos del mundo actual.” El Liceo Experimental está orientado fundamentalmente a la formación integral de niños/as y jóvenes de la región de Magallanes y Antártica Chilena.</li>
                            <li>En lo referente a la formación educativa, la Institución privilegia la calidad y el equilibrio, favoreciendo tanto la formación valórica como el desarrollo intelectual de los estudiantes.</li>
                            <li>En su vinculación con la comunidad, la Institución favorece el desarrollo y ejemplificación de valores como el cuidado del medio ambiente y la solidaridad, a través de acciones directas o indirectas de los estudiantes, como asimismo por la participación en organizaciones comunitarias públicas y privadas.</li>
                            <li>La excelencia académica ala que se aspira se refiere al desarrollo intelectual y construcción de conocimiento al más alto nivel posible, de tal modo que les permita autonomía en su futuro proyecto de vida y libre elección de las vías de proyección formativa.</li>
                            <li>La integralidad en la formación a la que se hace referencia pretende la conjunción armónica del desarrollo personal- actitudinal y valórico- y el desarrollo intelectual, entendido en su conjunto, como un saber conocer, saber ser, saber hacer y saber convivir, alcanzado cada vez en mayor medida y complejidad por los estudiantes, a través del todo el proceso educativo</li>

                        </ul>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Visión</Accordion.Header>
                    <Accordion.Body>
                        El Liceo Experimental UMAG espera: “Llegar a ser en la Región de Magallanes la institución educativa de excelencia, formando niños/as y jóvenes a través de una educación humana y académica, para que éstos al alcanzar su madurez, sean un real aporte a la sociedad chilena”.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr />
            <h2>Logos</h2>
            <Container>
                <Row className="justify-content-md-center">
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="Logo Liceo Experimental"
                            src={logo}
                        />
                        <Figure.Caption>
                            Logo Liceo Experimental
                        </Figure.Caption>
                    </Figure>

                    <Figure>
                        <Figure.Image
                            width={371}
                            height={380}
                            alt="Logo Liceo Experimental con fondo blanco"
                            src={logoBlanco}
                        />
                        <Figure.Caption>
                            Logo Liceo Experimental con fondo blanco
                        </Figure.Caption>
                    </Figure>

                    <Figure>
                        <Figure.Image
                            width={371}
                            height={380}
                            alt="Logo Liceo Experimental sin fondo"
                            src={logoTransparente}
                        />
                        <Figure.Caption>
                            Logo Liceo Experimental sin fondo
                        </Figure.Caption>
                    </Figure>
                </Row>
            </Container>
        </div>
    );
};

export default Nosotros;