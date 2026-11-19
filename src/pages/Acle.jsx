import { FaStar } from "react-icons/fa";
import { Page, PageHeader, Section } from "../components/ui/Page";
import { NewsGrid } from "../components/ui/NewsGrid";
import { useWpCategoryPosts } from "../services/wordpress";

const Acle = () => {
  const noticias = useWpCategoryPosts(["acles", "acle"]);

  return (
    <Page>
      <PageHeader
        icon={FaStar}
        kicker="Comunidad"
        title="ACLE / Talleres"
        lead="Actividades Curriculares de Libre Elección y talleres del Liceo: deportes, arte y más. Aquí se publican sus noticias y novedades."
      />

      <Section id="noticias" kicker="Novedades" title="Noticias de ACLE">
        <NewsGrid {...noticias} empty="No hay noticias de ACLE disponibles por ahora." />
      </Section>
    </Page>
  );
};

export default Acle;
