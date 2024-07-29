import React from 'react';
import { Card } from 'react-bootstrap';

const Evaluaciones = () => {
    return (
        <div className="container contenedor px-5">
            <h2>Calendario de Evaluaciones</h2>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <a href='https://docs.google.com/spreadsheets/d/18Dcms3doKgW8Q9Dn0T6kHWGVZEHE26VfjW43d1VgTPg/edit?usp=sharing' target="_blank" rel="noopener noreferrer" className='link-underlinelink-offset-2 link-underline link-underline-opacity-0'>
                        <Card border="primary" className="mb-4 btnCard">
                            <Card.Header>Evaluaciones E.G.B.</Card.Header>
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
                    <a href='https://docs.google.com/spreadsheets/d/1yqHhLflhZf0L08lZJUQ29DO8UY7ilc1QLqDvO-zyJWQ/edit#gid=575399820' target="_blank" rel="noopener noreferrer" className='link-underlinelink-offset-2 link-underline link-underline-opacity-0'>
                        <Card border="primary" className="mb-4 btnCard">
                            <Card.Header>Evaluaciones E.G.B.</Card.Header>
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
                    <a href='https://docs.google.com/spreadsheets/d/10P-yo0vvOdpovzewGxTsyrXu9JImFKjlOd60yqdPZ_g/edit?usp=sharing' target="_blank" rel="noopener noreferrer" className='link-underlinelink-offset-2 link-underline link-underline-opacity-0'>
                        <Card border="primary" className="mb-4 btnCard">
                            <Card.Header>Evaluaciones E.M.</Card.Header>
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