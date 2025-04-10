import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * Componente de tarjeta personalizable con iconos
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título de la tarjeta
 * @param {React.ReactNode} props.titleIcon - Icono para el título
 * @param {string} props.subtitle - Subtítulo opcional
 * @param {React.ReactNode} props.subtitleIcon - Icono para el subtítulo
 * @param {React.ReactNode} props.children - Contenido de la tarjeta
 * @param {string} props.headerText - Texto del encabezado
 * @param {React.ReactNode} props.headerIcon - Icono para el encabezado
 * @param {string} props.footerText - Texto del pie de página
 * @param {React.ReactNode} props.footerIcon - Icono para el pie de página
 * @param {string} props.borderColor - Color del borde (primary, secondary, success, etc.)
 * @param {string} props.imageUrl - URL de la imagen
 * @param {string} props.imageAlt - Texto alternativo para la imagen
 * @param {Function} props.onClick - Función a ejecutar al hacer clic en la tarjeta
 * @param {string} props.className - Clases adicionales para la tarjeta
 */
const CustomCard = ({
  title,
  titleIcon,
  subtitle,
  subtitleIcon,
  children,
  headerText,
  headerIcon,
  footerText,
  footerIcon,
  borderColor = "primary",
  imageUrl,
  imageAlt,
  onClick,
  className = "",
}) => {
  return (
    <Card
      border={borderColor}
      className={`mb-4 ${className}`}
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 123, 255, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
      onClick={onClick}
    >
      {headerText && (
        <Card.Header className="d-flex align-items-center">
          {headerIcon && <span className="me-2">{headerIcon}</span>}
          <span>{headerText}</span>
        </Card.Header>
      )}

      {imageUrl && (
        <div className="position-relative">
          <Card.Img
            variant="top"
            src={imageUrl}
            alt={imageAlt || title}
            style={{
              height: "200px",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      )}

      <Card.Body>
        {title && (
          <Card.Title className="d-flex align-items-center mb-3">
            {titleIcon && <span className="me-2">{titleIcon}</span>}
            {title}
          </Card.Title>
        )}

        {subtitle && (
          <Card.Subtitle className="d-flex align-items-center mb-3 text-muted">
            {subtitleIcon && <span className="me-2">{subtitleIcon}</span>}
            {subtitle}
          </Card.Subtitle>
        )}

        {children}
      </Card.Body>

      {footerText && (
        <Card.Footer className="d-flex align-items-center">
          {footerIcon && <span className="me-2">{footerIcon}</span>}
          {footerText}
        </Card.Footer>
      )}
    </Card>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string,
  titleIcon: PropTypes.node,
  subtitle: PropTypes.string,
  subtitleIcon: PropTypes.node,
  children: PropTypes.node,
  headerText: PropTypes.string,
  headerIcon: PropTypes.node,
  footerText: PropTypes.string,
  footerIcon: PropTypes.node,
  borderColor: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default CustomCard;
