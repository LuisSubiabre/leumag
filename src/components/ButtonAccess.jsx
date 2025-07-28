import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export const ButtonAccess = ({
  name,
  link,
  variant = "outline-light",
  animate = false,
}) => {
  const getClassName = () => {
    const baseClass = "px-3 py-2 text-uppercase fw-bold w-100";
    return animate ? `${baseClass} animate-shake-soft` : baseClass;
  };

  return (
    <Link to={link} className="text-decoration-none w-100">
      <Button
        variant={variant}
        className={getClassName()}
        style={{
          fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
          letterSpacing: "0.5px",
          whiteSpace: "nowrap",
          transition: "all 0.3s ease",
        }}
      >
        {name}
      </Button>
    </Link>
  );
};

ButtonAccess.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  variant: PropTypes.string,
  animate: PropTypes.bool,
};
