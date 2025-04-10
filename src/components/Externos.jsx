import React from 'react';
import linkUmag from '../assets/img/boton_umag.jpg';
import linkAdmision from '../assets/img/boton_admision.jpg';
import linkNutri from '../assets/img/btn_nutricion.png';
const Externos = () => {
    return (
        <div>
            <h2>Enlaces:</h2>
            <div>
                <a href="https://www.umag.cl" target="_blank" rel="noopener noreferrer">
                    <img src={linkUmag} alt="UMAG" className='mx-2' />
                </a>
                <a href="https://www.sistemadeadmisionescolar.cl/" target="_blank" rel="noopener noreferrer">
                    <img src={linkAdmision} alt="Admision" className='mx-2' />
                </a>
                <a href="https://sites.google.com/liceoexperimental.cl/proyectonutricionydietetica?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <img src={linkNutri} alt="Proyecto Nutrición Umag" className='mx-2' />
                </a>
            </div>
        </div>
    );
};

export default Externos;