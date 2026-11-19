import { FaClock, FaSchool, FaUserGraduate } from "react-icons/fa";
import { LinkCard, Page, PageHeader, Section } from "../components/ui/Page";

const HORARIOS = [
  {
    href: "https://docs.google.com/spreadsheets/d/1knZG202Pknw8YkNpfeM0SjxjMxTWg8mPCEukuhAkjvU/edit?usp=sharing",
    eyebrow: "E.G.B.",
    title: "Horario Enseñanza Básica",
    icon: FaSchool,
    tone: "blue",
  },
  {
    href: "https://docs.google.com/spreadsheets/d/1Xd3OOQxeUJFRraxwiu_vkVBDycjZpICS3ttpl1k0kkU/edit?usp=sharing",
    eyebrow: "E.M.",
    title: "Horario Enseñanza Media",
    icon: FaUserGraduate,
    tone: "purple",
  },
];

const Horarios = () => {
  return (
    <Page>
      <PageHeader
        icon={FaClock}
        kicker="Información académica"
        title="Horarios"
        lead="Consulta los horarios de clases de Enseñanza Básica y Media, actualizados para el año en curso."
      />

      <Section id="horarios" kicker="Por nivel" title="Horarios de clases">
        <div className="lp-grid lp-grid--2" data-reveal>
          {HORARIOS.map((horario) => (
            <LinkCard
              key={horario.href}
              {...horario}
              meta="Google Sheets"
              action="Ver horario"
            />
          ))}
        </div>
      </Section>
    </Page>
  );
};

export default Horarios;
