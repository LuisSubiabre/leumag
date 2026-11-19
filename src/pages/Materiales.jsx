import { FaBookOpen, FaLanguage, FaListUl, FaPencilRuler } from "react-icons/fa";
import { LinkCard, Page, PageHeader, PageNav, Section } from "../components/ui/Page";

const INGLES = "/docs/materiales2026/Textos-de-Ingles-2026.pdf";

const TIPOS = {
  lista: { icon: FaListUl, tone: "blue", action: "Ver lista" },
  lector: { icon: FaBookOpen, tone: "green", action: "Ver plan lector" },
  ingles: { icon: FaLanguage, tone: "purple", action: "Ver textos" },
};

const NIVELES = [
  {
    id: "parvularia",
    nav: "Parvularia",
    titulo: "Educación Parvularia",
    items: [
      { tipo: "lista", titulo: "Materiales NT 1", href: "https://drive.google.com/file/d/1N2faAgh6_dTrhgXzrkfuSAFKr5r5pHNO/view?usp=drive_link" },
      { tipo: "lista", titulo: "Materiales NT 2", href: "https://drive.google.com/file/d/1ssVxeUvX7GoTvodKMsOomBQUR6dbIPFt/view?usp=drive_link" },
      { tipo: "ingles", titulo: "Textos de Inglés", href: INGLES },
    ],
  },
  {
    id: "basica",
    nav: "Básica",
    titulo: "Educación Básica",
    items: [
      { tipo: "lista", titulo: "1ero Básico", href: "/docs/materiales2026/LM-1-basico-2026.pdf" },
      { tipo: "lista", titulo: "2do Básico", href: "https://drive.google.com/file/d/14nlLEesRRDbkG5S_LB_tlDA3uXHS8FY2/view?usp=drive_link" },
      { tipo: "lista", titulo: "3ero Básico", href: "https://drive.google.com/file/d/141GjAarICIHn6XqKQKLdZsPjdcmuExeF/view?usp=drive_link" },
      { tipo: "lista", titulo: "4to Básico", href: "https://drive.google.com/file/d/1_QWYZ3qqG7G1aG6bFOc3tonDqkqs80Xa/view?usp=sharing" },
      { tipo: "lista", titulo: "5to Básico", href: "https://drive.google.com/file/d/10Tsz3DAkBPx5CzKRG0qi9pOAp2qNVgwP/view?usp=drive_link" },
      { tipo: "lista", titulo: "6to Básico", href: "https://drive.google.com/file/d/1LdcyWmm3Qldg0x_S3oDDg7BNo9hxztaR/view?usp=drive_link" },
      { tipo: "lista", titulo: "7mo Básico", href: "https://drive.google.com/file/d/13p5V5RMVAiSUWMBP1xSnHL22rl195obE/view?usp=drive_link" },
      { tipo: "lista", titulo: "8vo Básico", href: "https://drive.google.com/file/d/18ZQifunnOoePyMX3Ld10kvh7P2s0SlqB/view?usp=drive_link" },
      { tipo: "ingles", titulo: "Textos de Inglés", href: INGLES },
      { tipo: "lector", titulo: "Plan Lector 1ero a 4to", href: "/docs/materiales2026/PlanLector-1a4EGB-2026.pdf" },
      { tipo: "lector", titulo: "Plan Lector 5to a 8vo", href: "/docs/materiales2026/PlanLector-5a8EGB-2026.pdf" },
    ],
  },
  {
    id: "media",
    nav: "Media",
    titulo: "Educación Media",
    items: [
      { tipo: "lista", titulo: "Materiales 1ero a 4to Medio", href: "https://docs.google.com/spreadsheets/d/1W_iw4bAgls3f5fkcLuZ1g_f10SXKJqFQcVvpxRgN4w4/edit?usp=sharing" },
      { tipo: "lector", titulo: "Plan Lector Ens. Media", href: "/docs/materiales2026/Plan-Lector-EM-2026.pdf" },
    ],
  },
];

const formato = (href) => {
  if (href.endsWith(".pdf")) return "PDF";
  if (href.includes("spreadsheets")) return "Google Sheets";
  return "Google Drive";
};

const NAV = NIVELES.map(({ id, nav }) => ({ id, label: nav }));

const Materiales = () => {
  return (
    <Page>
      <PageHeader
        icon={FaPencilRuler}
        kicker="Información académica"
        title="Materiales y Plan Lector 2026"
        lead="Descarga las listas de útiles, textos y lecturas solicitadas para cada curso."
      />

      <PageNav items={NAV} label="Niveles" />

      {NIVELES.map((nivel) => (
        <Section key={nivel.id} id={nivel.id} kicker="Nivel" title={nivel.titulo}>
          <div className="lp-grid" data-reveal>
            {nivel.items.map(({ tipo, titulo, href }) => (
              <LinkCard
                key={`${titulo}-${href}`}
                href={href}
                title={titulo}
                meta={formato(href)}
                {...TIPOS[tipo]}
              />
            ))}
          </div>
        </Section>
      ))}
    </Page>
  );
};

export default Materiales;
