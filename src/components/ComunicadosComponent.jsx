import { Link } from 'react-router-dom';
import { comunicados } from '../comunicados.js';

export const ComunicadosComponent = () => {
    const primerosAvisos = comunicados.slice(0, 2);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Últimos comunicados</h1>
                </div>
            </div>
            <div className="row">

                {primerosAvisos.map((comunicados) => (
                    <div className="col-md-6" key={comunicados.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{comunicados.titulo}</h5>
                                <p className="card-text">{comunicados.fecha}</p>

                                <p className="card-text">{comunicados.contenido}</p>
                                <div style={{ textAlign: 'center' }}>
                                    <img src={comunicados.img} style={{ width: '80%' }} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="my-2 d-flex flex-row-reverse bd-highlight"><Link to="/Comunicados" className="btn btn-primary">Ver todos los comunicados</Link></div>

            </div>
        </div>
    );
} 