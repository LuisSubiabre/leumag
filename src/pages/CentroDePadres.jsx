import pdfAfiche1 from "../assets/pdf/afiche-1-CGP.pdf";

const CentroDePadres = () => {
  return (
    <>
      <div className="container contenedor px-5">
        <h2> Centro de Padres</h2>
        <hr />
        <embed
          src={pdfAfiche1}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </div>
    </>
  );
};

export default CentroDePadres;
