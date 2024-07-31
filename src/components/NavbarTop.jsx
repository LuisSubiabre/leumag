import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../assets/img/logo.png';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import RedesSociales from './RedesSociales';

const NavbarTop = () => {
    // Cargar el tema guardado en localStorage o usar el tema claro por defecto
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : false;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const handleThemeChange = (theme) => {
        const isDark = theme === 'oscuro';
        setIsDarkMode(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light'); // Guardar en localStorage
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src={logoImage} width="30" height="24" className="d-inline-block align-text-top" alt="Logo Liceo Experimental Umag" />
                <Link className="navbar-brand" to={'/'}>Liceo Experimental Umag</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/'}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/Nosotros'}>Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/Estamentos'}>Estamentos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/Contacto'}>Contacto</NavLink>
                        </li>
                    </ul>
                    <RedesSociales colorRSS='gray' />
                </div>

                <div className="dropdown mx-2">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={() => handleThemeChange('claro')}
                            >
                                <FontAwesomeIcon icon={faSun} /> Claro
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={() => handleThemeChange('oscuro')}
                            >
                                <FontAwesomeIcon icon={faMoon} /> Oscuro
                            </button>
                        </li>
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
