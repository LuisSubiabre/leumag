import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBalanceScale,
  FaBookOpen,
  FaDownload,
  FaEye,
  FaGraduationCap,
  FaHandsHelping,
  FaHashtag,
  FaLandmark,
  FaLayerGroup,
  FaLeaf,
  FaSeedling,
  FaTshirt,
  FaUserTie,
  FaBullseye,
  FaUniversity,
} from "react-icons/fa";
import { Cifra, Page, PageHeader, Section } from "./ui/Page";
import logo from "../assets/img/logo.png";
import logoBlanco from "../assets/img/logo_fondo_blanco.png";
import logoTransparente from "../assets/img/logo_fondo_transparente.png";
import "./Nosotros.css";

const CIFRAS = [
  { value: 25, suffix: "+", label: "años formando en Magallanes" },
  { value: 840, suffix: "+", label: "estudiantes en nuestra comunidad" },
];

const FICHA = [
  { icon: FaHashtag, label: "RBD", value: "24327" },
  { icon: FaUserTie, label: "Director", value: "Nelson Patricio Bravo Jorquera" },
  { icon: FaLandmark, label: "Dependencia", value: "Particular Subvencionado" },
  { icon: FaLayerGroup, label: "Niveles", value: "Pre-Kínder a IV Medio" },
  { icon: FaBalanceScale, label: "Orientación", value: "Laica" },
  { icon: FaTshirt, label: "Uniforme", value: "Uniforme propio" },
];

const MISION =
  "Educar a niños/as y jóvenes de la sociedad magallánica a través de la construcción de conocimiento científico-humanista y de valores universales: ambientalistas, de solidaridad, respeto y honestidad, de manera de formar personas íntegras que aporten al desarrollo de la sociedad, con capacidad para enfrentar los desafíos del mundo actual.";

const VISION =
  "Llegar a ser en la Región de Magallanes la institución educativa de excelencia, formando niños/as y jóvenes a través de una educación humana y académica, para que éstos al alcanzar su madurez, sean un real aporte a la sociedad chilena.";

const PRINCIPIOS = [
  {
    icon: FaSeedling,
    title: "Formación integral",
    text: "El Liceo Experimental está orientado fundamentalmente a la formación integral de niños/as y jóvenes de la región de Magallanes y Antártica Chilena.",
  },
  {
    icon: FaBookOpen,
    title: "Calidad y equilibrio",
    text: "En lo referente a la formación educativa, la Institución privilegia la calidad y el equilibrio, favoreciendo tanto la formación valórica como el desarrollo intelectual de los estudiantes.",
  },
  {
    icon: FaHandsHelping,
    title: "Vínculo con la comunidad",
    text: "La Institución favorece el desarrollo y ejemplificación de valores como el cuidado del medio ambiente y la solidaridad, a través de acciones directas o indirectas de los estudiantes, como asimismo por la participación en organizaciones comunitarias públicas y privadas.",
  },
  {
    icon: FaGraduationCap,
    title: "Excelencia académica",
    text: "Se refiere al desarrollo intelectual y construcción de conocimiento al más alto nivel posible, de tal modo que les permita autonomía en su futuro proyecto de vida y libre elección de las vías de proyección formativa.",
  },
  {
    icon: FaLeaf,
    title: "Saber conocer, ser, hacer y convivir",
    text: "La integralidad pretende la conjunción armónica del desarrollo personal —actitudinal y valórico— y el desarrollo intelectual, alcanzado cada vez en mayor medida y complejidad por los estudiantes, a través de todo el proceso educativo.",
  },
];

const LOGOS = [
  { src: logo, name: "Logo principal", file: "logo-liceo-experimental.png", tone: "light" },
  {
    src: logoBlanco,
    name: "Logo con fondo blanco",
    file: "logo-liceo-experimental-fondo-blanco.png",
    tone: "light",
  },
  {
    src: logoTransparente,
    name: "Logo sin fondo",
    file: "logo-liceo-experimental-sin-fondo.png",
    tone: "checker",
  },
];

const Nosotros = () => {
  return (
    <Page className="nosotros-page">
      <PageHeader
        icon={FaUniversity}
        kicker="Nuestro liceo"
        title="Nosotros"
        lead="Formamos niñas, niños y jóvenes de Magallanes con una educación humana y académica, para que sean un real aporte a la sociedad."
      />

      <div className="lp-band" data-reveal>
        <p className="lp-kicker">El liceo en cifras</p>
        <div className="lp-stats">
          {CIFRAS.map((cifra) => (
            <Cifra key={cifra.label} {...cifra} />
          ))}
        </div>
      </div>

      <Section id="mision-vision" kicker="Identidad" title="Misión y visión">
        <div className="lp-grid lp-grid--2" data-reveal>
          <article className="lp-card nosotros-statement">
            <span className="lp-icon" aria-hidden="true">
              <FaBullseye />
            </span>
            <h3>Misión</h3>
            <p>{MISION}</p>
          </article>
          <article className="lp-card nosotros-statement nosotros-statement--vision">
            <span className="lp-icon" aria-hidden="true">
              <FaEye />
            </span>
            <h3>Visión</h3>
            <blockquote>
              <p>{VISION}</p>
            </blockquote>
          </article>
        </div>
      </Section>

      <Section
        id="principios"
        kicker="Lo que nos guía"
        title="Nuestros principios"
        lead="Cómo entendemos la formación de nuestros estudiantes en el aula y en la comunidad."
      >
        <div className="nosotros-principios">
          {PRINCIPIOS.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="lp-card nosotros-principio" data-reveal>
              <span className="nosotros-principio__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="lp-icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="ficha" kicker="Información" title="Ficha del establecimiento">
        <div className="lp-grid" data-reveal>
          {FICHA.map(({ icon: Icon, label, value }) => (
            <div key={label} className="lp-card lp-fact">
              <span className="lp-icon" aria-hidden="true">
                <Icon />
              </span>
              <div>
                <span className="lp-fact__label">{label}</span>
                <span className="lp-fact__value">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="logos"
        kicker="Identidad visual"
        title="Logos del liceo"
        lead="Descarga los logos oficiales para presentaciones, afiches y actividades del liceo."
      >
        <div className="lp-grid" data-reveal>
          {LOGOS.map(({ src, name, file, tone }) => (
            <figure key={file} className="lp-card nosotros-logo">
              <div className={`nosotros-logo__preview nosotros-logo__preview--${tone}`}>
                <img src={src} alt={name} loading="lazy" />
              </div>
              <figcaption>
                <span>{name}</span>
                <a href={src} download={file} className="lp-btn lp-btn--ghost nosotros-logo__btn">
                  <FaDownload aria-hidden="true" />
                  PNG
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <div className="nosotros-cta" data-reveal>
        <div>
          <h2>Conoce a nuestra comunidad</h2>
          <p>Directivos, docentes y asistentes que hacen posible el Liceo.</p>
        </div>
        <div className="nosotros-cta__actions">
          <Link to="/Estamentos" className="lp-btn">
            Ver el equipo
            <FaArrowRight size={12} aria-hidden="true" />
          </Link>
          <Link to="/Contacto" className="lp-btn lp-btn--ghost">
            Contacto
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default Nosotros;
