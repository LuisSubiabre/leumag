import React from 'react';

export const Usuarios = (props) => {

    return (
        <>
            <div className="personal">
                <div>
                    <img className="img-fluid rounded-circle float-start profile" src={props.img} alt="" />
                </div>
                <div className='personal-info'>
                    <div className='small'>{props.nombre}</div>
                    <div className='small'>{props.dpto}</div>
                    <div className='small'>{props.correo}</div>
                    <div className='small'>{props.more}</div>
                    <div className='small'>{props.asignatura}</div>
                </div>
            </div>
        </>
    )
}
