//import { useState } from "react";
import { comunicados } from '../comunicados.js';


export const Comunicados = () => {
    return (
        <div className="container contenedor px-5">
            <h2> Historial de Comunicados</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {comunicados.map((comunicado) => (

                    <div className="col" key={comunicado.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{comunicado.titulo}</h5>
                                <p className="card-text">{comunicado.fecha}</p>
                                <p className="card-text" dangerouslySetInnerHTML={{ __html: comunicado.contenido }}></p>
                                <div style={{ textAlign: 'center' }}>
                                    <img src={comunicado.img} style={{ width: '80%' }} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
