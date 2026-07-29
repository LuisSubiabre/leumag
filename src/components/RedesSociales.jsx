import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/leumagoficial",
    icon: faFacebook,
    label: "Facebook de LEUMAG",
    brand: "facebook",
  },
  {
    href: "https://www.instagram.com/leumagoficial/",
    icon: faInstagram,
    label: "Instagram de LEUMAG",
    brand: "instagram",
  },
  {
    href: "https://www.youtube.com/leumagtv",
    icon: faYoutube,
    label: "YouTube de LEUMAG",
    brand: "youtube",
  },
];

const RedesSociales = ({
  colorRSS,
  className = "",
  variant = "default",
}) => {
  const isNavbar = variant === "navbar";

  return (
    <nav
      className={`redes-sociales redes-sociales--${variant} ${className}`.trim()}
      aria-label="Redes sociales"
    >
      {SOCIAL_LINKS.map(({ href, icon, label, brand }) => (
        <a
          key={brand}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`redes-sociales__link redes-sociales__link--${brand}`}
          aria-label={label}
          title={label}
        >
          <FontAwesomeIcon
            icon={icon}
            color={isNavbar ? undefined : colorRSS}
            aria-hidden="true"
          />
        </a>
      ))}
    </nav>
  );
};

RedesSociales.propTypes = {
  colorRSS: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "navbar", "footer"]),
};

export default RedesSociales;
