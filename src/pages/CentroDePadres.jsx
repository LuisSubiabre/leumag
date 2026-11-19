import { FaFilePdf, FaUserFriends } from "react-icons/fa";
import { Page, PageHeader, Section } from "../components/ui/Page";
import pdfAfiche1 from "../assets/pdf/afiche-1-CGP.pdf";
import "./CentroDePadres.css";

const CentroDePadres = () => {
  return (
    <Page>
      <PageHeader
        icon={FaUserFriends}
        kicker="Comunidad"
        title="Centro de Padres"
        lead="Organización de apoderados y vida familiar del Liceo."
      />

      <Section id="afiche" kicker="Información" title="Afiche del Centro de Padres">
        <div className="lp-frame cgp-afiche" data-reveal>
          <embed src={pdfAfiche1} type="application/pdf" className="cgp-afiche__pdf" />
        </div>
        <a
          href={pdfAfiche1}
          target="_blank"
          rel="noopener noreferrer"
          className="lp-btn lp-btn--ghost cgp-afiche__btn"
        >
          <FaFilePdf aria-hidden="true" />
          Abrir afiche en PDF
        </a>
      </Section>
    </Page>
  );
};

export default CentroDePadres;
