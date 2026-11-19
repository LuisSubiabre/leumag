import {
  FaClipboardCheck,
  FaPencilAlt,
  FaSchool,
  FaUserGraduate,
} from "react-icons/fa";
import { LinkCard, Page, PageHeader, Section } from "../components/ui/Page";

const SEMESTRE = "2do Semestre 2026";

const EVALUACIONES = [
  {
    href: "https://docs.google.com/spreadsheets/d/1JfIpBIkpQhXf-9wEfPkVXdien5K8vydHKaj8n4G4S_o/edit?usp=sharing",
    eyebrow: "Evaluaciones E.G.B.",
    title: "1er Ciclo Básico",
    icon: FaPencilAlt,
    tone: "gold",
  },
  {
    href: "https://docs.google.com/spreadsheets/d/1k3Lj8klfjBGrbrx16Ni23PintiSM5-k8tVaEH3Ijzwk/edit?usp=sharing",
    eyebrow: "Evaluaciones E.G.B.",
    title: "2do Ciclo Básico",
    icon: FaSchool,
    tone: "blue",
  },
  {
    href: "https://docs.google.com/spreadsheets/d/1ig-z1DS-Vo5xBLyPTT7s6HnlW5t9JLxN-PxHb9aAHmo/edit?usp=sharing",
    eyebrow: "Evaluaciones E.M.",
    title: "Enseñanza Media",
    icon: FaUserGraduate,
    tone: "purple",
  },
];

const Evaluaciones = () => {
  return (
    <Page>
      <PageHeader
        icon={FaClipboardCheck}
        kicker="Información académica"
        title="Calendario de evaluaciones"
        lead="Encuentra las fechas de pruebas y evaluaciones de cada nivel, en un solo lugar."
      />

      <Section id="evaluaciones" kicker={SEMESTRE} title="Evaluaciones por ciclo">
        <div className="lp-grid" data-reveal>
          {EVALUACIONES.map((evaluacion) => (
            <LinkCard
              key={evaluacion.href}
              {...evaluacion}
              badge={SEMESTRE}
              meta="Google Sheets"
              action="Ver evaluaciones"
            />
          ))}
        </div>
      </Section>
    </Page>
  );
};

export default Evaluaciones;
