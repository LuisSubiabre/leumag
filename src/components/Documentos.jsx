import docRIE from '../assets/docs/RIE.pdf';
import docPISE from '../assets/docs/PISE.pdf';
import docEvaluacion from '../assets/docs/reglamento2024.pdf';
// import docConvivencia from '../assets/docs/convivencia.pdf';
import docCAA from '../assets/docs/reglamentoCAA.pdf';
import docBecas from '../assets/docs/becas.pdf';
import { Card, Badge } from 'react-bootstrap';

export const Documentos = () => {
    return (
        <>
            <h2>Documentos:</h2>
            <div className="row">
                <div className="col-md-4">
                    <a href={docRIE} target="_blank" rel="noopener noreferrer" className='link-underlinelink-offset-2 link-underline link-underline-opacity-0'>
                        <Card border="primary" className="mb-4 btnCard">
                            <Card.Header>RIE <small><Badge>Actualizado</Badge></small></Card.Header>
                            <Card.Body>
                                <Card.Title>Reglamento Interno Escolar</Card.Title>
                                <Card.Text>
                                    Ver documento
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </div >
                <div className="col-md-4">
                    <a href={docPISE} target="_blank" rel="noopener noreferrer" className='link-underlinelink-offset-2 link-underline link-underline-opacity-0'>
                        <Card border="primary" className="mb-4 btnCard">
                            <Card.Header>PISE</Card.Header>
                            <Card.Body>
                                <Card.Title>Plan Integran de Seguridad Escolar</Card.Title>
                                <Card.Text>
                                    Ver documento
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href={docEvaluacion} target="_blank" rel="noopener noreferrer" className='link-underlinelink-offset-2 link-underline link-underline-opacity-0'>
                        <Card border="primary" className="mb-4 btnCard">
                            <Card.Header>Evaluacion</Card.Header>
                            <Card.Body>
                                <Card.Title>Reglamento de Evaluación y Promoción</Card.Title>
                                <Card.Text>
                                    Ver documento
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </div>
            </div >
            <div className="row">
                {/* <div className="col-md-4">
                    <a href={docConvivencia} target="_blank" rel="noopener noreferrer" className='link-underlinelink-offset-2 link-underline link-underline-opacity-0'>
                        <Card border="primary" className="mb-4 btnCard">
                            <Card.Header>Convivencia</Card.Header>
                            <Card.Body>
                                <Card.Title>Reglamento de Convivencias Escolar</Card.Title>
                                <Card.Text>
                                    Ver documento
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </div> */}
                <div className="col-md-4">
                    <a href={docCAA} target="_blank" rel="noopener noreferrer" className='link-underlinelink-offset-2 link-underline link-underline-opacity-0'>
                        <Card border="primary" className="mb-4 btnCard">
                            <Card.Header>CAA</Card.Header>
                            <Card.Body>
                                <Card.Title>Reglamento Centro de Alumnos</Card.Title>
                                <Card.Text>
                                    Ver documento
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="https://docs.google.com/document/d/1m7WZ1CmMgsM2u34fZSoePobwyexFi52M/pub" target="_blank" rel="noopener noreferrer" className='link-underlinelink-offset-2 link-underline link-underline-opacity-0'>
                        <Card border="primary" className="mb-4 btnCard">
                            <Card.Header>Becas</Card.Header>
                            <Card.Body>
                                <Card.Title>Reglamento General de Becas 2025</Card.Title>
                                <Card.Text>
                                    Ver documento
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </div>
            </div>
        </>
    );
}