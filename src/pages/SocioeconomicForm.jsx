import React, { useRef } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';

const SocioeconomicForm = () => {
    const formRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => formRef.current,
    });

    return (
        <Container>
            <div ref={formRef}>
                <h1 className="text-center my-4">FORMULARIO POSTULACIÓN BECA SOCIOECONÓMICA</h1>
                <h3 className="text-center mb-4">AÑO ACADÉMICO 2025</h3>

                {/* I. Identificación del Alumno */}
                <h4>I.- IDENTIFICACIÓN DEL ALUMN@</h4>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese los nombres" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese los apellidos" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>R.U.T.</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese el RUT" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Fecha de Nacimiento</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nivel a Cursar Año 2025</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese el nivel" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Domicilio</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese el domicilio" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el teléfono" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check inline type="radio" label="Postula Beca" name="beca" />
                        <Form.Check inline type="radio" label="Renueva Beca" name="beca" />
                        <Form.Label className="ms-2">Indique % beca año 2024:</Form.Label>
                        {['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'].map((percent, index) => (
                            <Form.Check key={index} inline type="radio" label={percent} name="percent" />
                        ))}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Indique cuántos años ha recibido beca</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check inline type="radio" label="Posee otras becas" name="otrasBecas" />
                        <Form.Check inline type="radio" label="No posee otras becas" name="otrasBecas" />
                        <Form.Control type="text" placeholder="Si posee, señale cuál" />
                    </Form.Group>

                    {/* Sección Apoderado */}
                    <h4>II.- IDENTIFICACIÓN DEL APODERADO</h4>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el nombre del apoderado" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Domicilio</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el domicilio del apoderado" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el teléfono del apoderado" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Parentesco con el alumn@</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el parentesco" />
                    </Form.Group>

                    {/* Aquí puedes seguir con las demás secciones */}
                </Form>
            </div>

            <Button className="mt-3" onClick={handlePrint}>
                Exportar a PDF
            </Button>
        </Container>
    );
};

export default SocioeconomicForm;
