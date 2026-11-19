import { FaUsers } from "react-icons/fa";
import { Page, PageHeader, Section } from "../components/ui/Page";
import { NewsGrid } from "../components/ui/NewsGrid";
import { useWpCategoryPosts } from "../services/wordpress";
import "./CentroDeAlumnos.css";

const PERIODO = "2026";

const DIRECTIVA = [
  { cargo: "Presidente", nombre: "Néstor Ruiz", curso: "4to medio A" },
  { cargo: "Vicepresidenta", nombre: "Mia Mayorga", curso: "4to medio A" },
  { cargo: "Secretaria", nombre: "Isidora Espinoza", curso: "4to medio A" },
  { cargo: "Secretario de actas", nombre: "Javiera Gamboa", curso: "1ero medio B" },
  { cargo: "Tesorera", nombre: "Antonia Ojeda", curso: "4to medio A" },
];

const iniciales = (nombre) =>
  nombre
    .split(" ")
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("");

const CentroDeAlumnos = () => {
  const noticias = useWpCategoryPosts(["caa"]);

  return (
    <Page>
      <PageHeader
        icon={FaUsers}
        kicker="Comunidad"
        title={`Centro de Alumnos ${PERIODO}`}
        lead="Representación y actividades de las y los estudiantes del Liceo."
      />

      <Section id="directiva" kicker={`Periodo ${PERIODO}`} title="Directiva">
        <div className="caa-directiva" data-reveal>
          <div className="lp-frame caa-directiva__foto">
            <img src="/images/caa26.png" alt={`Directiva del Centro de Alumnos ${PERIODO}`} />
          </div>

          <ul className="caa-directiva__lista">
            {DIRECTIVA.map(({ cargo, nombre, curso }) => (
              <li key={cargo} className="lp-card caa-miembro">
                <span className="caa-miembro__avatar" aria-hidden="true">
                  {iniciales(nombre)}
                </span>
                <span className="caa-miembro__info">
                  <span className="caa-miembro__cargo">{cargo}</span>
                  <span className="caa-miembro__nombre">{nombre}</span>
                </span>
                <span className="caa-miembro__curso">{curso}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="noticias" kicker="Novedades" title="Noticias del CAA">
        <NewsGrid {...noticias} empty="Aún no hay noticias del Centro de Alumnos." />
      </Section>
    </Page>
  );
};

export default CentroDeAlumnos;
