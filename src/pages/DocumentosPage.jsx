import { FaFileAlt } from "react-icons/fa";
import Documentos from "../components/Documentos";
import { Page, PageHeader } from "../components/ui/Page";

const DocumentosPage = () => {
  return (
    <Page>
      <PageHeader
        icon={FaFileAlt}
        kicker="Institución"
        title="Documentos oficiales"
        lead="Reglamentos, protocolos y documentos institucionales del Liceo Experimental UMAG."
      />

      <Documentos showHeading={false} grouped />
    </Page>
  );
};

export default DocumentosPage;
