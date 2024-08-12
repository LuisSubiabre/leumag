import React from 'react';
import { Badge, Card } from 'react-bootstrap';

const Evaluaciones = () => {
    return (
        <div className="container contenedor px-5">
            <h2>Calendario de Evaluaciones</h2>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <a href='https://docs.google.com/spreadsheets/d/1AFD47lXVXj_UPTptWym87X53bgryr8UQwVuHwBLUQ3g/edit?gid=575399820#gid=575399820' target="_blank" rel="noopener noreferrer" className='link-underlinelink-offset-2 link-underline link-underline-opacity-0'>
                        <Card border="primary" className="mb-4 btnCard">
                            <Card.Header>Evaluaciones E.G.B <small className='pl-4'><Badge>Actualizado 2do Semestre</Badge></small></Card.Header>
                            <Card.Body>
                                <Card.Title>1er Ciclo Basico</Card.Title>
                                <Card.Text>
                                    Ver evaluaciones
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href='https://docs.google.com/spreadsheets/d/1XiLmES-9tgpFRArKtF04DOsG5OtTYpN0UT0ePMzYigU/edit?gid=575399820#gid=575399820' target="_blank" rel="noopener noreferrer" className='link-underlinelink-offset-2 link-underline link-underline-opacity-0'>
                        <Card border="primary" className="mb-4 btnCard">
                            <Card.Header>Evaluaciones E.G.B. <small className='pl-4'><Badge>Actualizado 2do Semestre</Badge></small></Card.Header>
                            <Card.Body>
                                <Card.Title>2do Ciclo Básico</Card.Title>
                                <Card.Text>
                                    Ver evaluaciones
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href='https://docs.google.com/spreadsheets/d/10P-yo0vvOdpovzewGxTsyrXu9JImFKjlOd60yqdPZ_g/edit?gid=0#gid=0' target="_blank" rel="noopener noreferrer" className='link-underlinelink-offset-2 link-underline link-underline-opacity-0'>
                        <Card border="primary" className="mb-4 btnCard">
                            <Card.Header>Evaluaciones E.M. </Card.Header>
                            <Card.Body>
                                <Card.Title>Enseñanza Media</Card.Title>
                                <Card.Text>
                                    Ver evaluaciones
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </div>

            </div>

        </div >
    );
};

export default Evaluaciones;