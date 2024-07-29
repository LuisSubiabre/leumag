import React from 'react';
import logoImage from '../assets/img/logo11.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const NavbarTop = () => {
    const total = 25000;
    const token = true;

    /*https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp*/
    const totalFormateado = total.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0,
    });
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <img src={logoImage} width="30" height="24" className="d-inline-block align-text-top" alt="Logo Liceo Experimental Umag" />
                <Link className="navbar-brand" to={'/'}>Liceo Experimental Umag</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}> Inicio</Link>
                        </li>

                        <Link className="nav-link" to={'/Nosotros'}> Nosotros</Link>
                        <Link className="nav-link" to={'/Estamentos'}> Estamentos</Link>
                        <Link className="nav-link" to={'/Contacto'}> Contacto</Link>
                    </ul>

                </div>
                <div className="text-end">
                    <Button variant="primary" className='mx-2' onClick={() => window.open('http://latium.cl/leumag/ph/funcionario/', '_blank')}>Funcionario</Button>
                    <Button variant="primary" className='mx-2' onClick={() => window.open('http://latium.cl/leumag/ph/apoderado/', '_blank')}>Apoderado</Button>
                </div>
            </div>
        </nav>
    );
};

export default NavbarTop;