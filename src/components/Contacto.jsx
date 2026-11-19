import MapaComoLlegar from "./MapaComoLlegar";

const Contacto = () => {
  return (
    <div className="container contenedor contacto-page">
      <MapaComoLlegar
        titulo="Contacto"
        kicker="Liceo Experimental UMAG"
        tituloComo="h1"
        tituloId="contacto-titulo"
        mostrarCorreos
      />
    </div>
  );
};

export default Contacto;
