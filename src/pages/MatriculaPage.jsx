import { FaBook, FaDownload, FaFileAlt, FaFilePdf, FaUserGraduate } from "react-icons/fa";
import { LinkCard, Page, PageHeader, Section } from "../components/ui/Page";

/*
 * Para activar/desactivar documentos, comenta o descomenta entradas.
 * `download` fuerza la descarga del archivo en vez de abrirlo.
 */
const MANUAL = {
  href: "/docs/GuiaMatricula.pdf",
  title: "Manual de Instrucciones",
  description: "Lee primero esta guía: explica paso a paso cómo completar la matrícula.",
};

const SECCIONES = [
  // {
  //   id: "nuevos",
  //   kicker: "Matrícula 2026",
  //   title: "Estudiantes nuevos",
  //   items: [
  //     { title: "Circular Matrícula 2026 Estudiantes Nuevos", icon: FaBook, href: "https://docs.google.com/document/d/1DbcqYmNFg9L3UdivQwx4RSH-7uRIE_ESx9jKLIqT5zA/edit?usp=sharing", meta: "Google Docs" },
  //     { title: "Horarios de Citación", icon: FaFilePdf, href: "https://drive.google.com/drive/folders/1x0yHCDFCYt4d-w65KMy_1ZFXrHWsyMVg?usp=sharing", meta: "Google Drive" },
  //     { title: "Formato Poder Notarial", icon: FaFilePdf, href: "/docs/FORMATO-PODER-NOTARIAL-2026.pdf", meta: "PDF" },
  //   ],
  // },
  {
    id: "antiguos",
    kicker: "Matrícula 2027",
    title: "Estudiantes antiguos",
    items: [
      // { title: "Horarios de Citación", icon: FaFilePdf, href: "https://drive.google.com/drive/folders/1RK69p0dVA1zPfm6VJSRT5J-Y_zlWlYNY", meta: "Google Drive" },
      {
        title: "Circular Matrícula 2027",
        icon: FaFileAlt,
        tone: "blue",
        href: "/docs/CircularMatriculasAntiguos.pdf",
        meta: "PDF",
        action: "Ver circular",
      },
      // { title: "Protocolo de Acreditación de Cambio en la Condición Socioeconómica y la Determinación de la No Renovación de Matrícula", icon: FaFilePdf, href: "/docs/ProtocoloAcreditacion.pdf", meta: "PDF" },
      {
        title: "Formato Poder Notarial",
        icon: FaFilePdf,
        tone: "red",
        href: "/docs/FORMATO-PODER-NOTARIAL-2027.pdf",
        meta: "PDF",
        action: "Ver formato",
      },
      {
        title: "Descargar Paso 1",
        icon: FaDownload,
        tone: "green",
        href: "/download/paso1_leumag_2027.rar",
        download: "paso1_leumag_2027.rar",
        meta: "Archivo .rar",
        action: "Descargar",
      },
    ],
  },
];

const MatriculaPage = () => {
  return (
    <Page>
      <PageHeader
        icon={FaUserGraduate}
        kicker="Proceso 2027"
        title="Matrícula"
        lead="Encuentra aquí los documentos y pasos para matricular a tu hijo o hija en el Liceo Experimental UMAG."
      />

      <div className="lp-section" data-reveal>
        <LinkCard
          featured
          icon={FaBook}
          eyebrow="Empieza aquí"
          action="Abrir manual"
          meta="PDF"
          {...MANUAL}
        />
      </div>

      {SECCIONES.map((seccion) => (
        <Section key={seccion.id} id={seccion.id} kicker={seccion.kicker} title={seccion.title}>
          <div className="lp-grid" data-reveal>
            {seccion.items.map((item) => (
              <LinkCard key={item.href} {...item} />
            ))}
          </div>
        </Section>
      ))}
    </Page>
  );
};

export default MatriculaPage;
