import React from 'react';
import Button from 'react-bootstrap/Button';

const MatriculaPage = () => {
    return (
        <div className="container contenedor px-5">
            <h2>Matrícula 2025 Alumnos Nuevos</h2>
            <Button
                href="https://docs.google.com/document/d/1xMdNAjHErI2qpdVbbdncUog26vVZP96nBXyEkacuowY/edit?usp=sharing"
                variant="warning"
                target="_blank"
            >
                Circular Matrícula 2025
            </Button>
            <hr />
            <h2>Matrícula 2025 Alumnos Antiguos</h2>
            <Button
                href="https://docs.google.com/document/d/1fdl5CkCyUGHlX_VnhaMxtZu-4ZtRVtsU/edit?rtpof=true&sd=true#heading=h.gjdgxs"
                variant="primary"
                target="_blank"
            >
                Circular Matrícula 2025
            </Button>
            {' '}
            <Button
                href="/docs/FORMATO-PODER-NOTARIAL-2025.pdf"
                variant="primary"
                target="_blank"
            >
                Formato Poder Notarial
            </Button>
        </div>
    );
};

export default MatriculaPage;
