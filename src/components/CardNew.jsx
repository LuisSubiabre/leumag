import {
  FaUtensils,
  FaDollarSign,
  FaInfoCircle,
  FaCartPlus,
} from "react-icons/fa";
import PropTypes from "prop-types";

const CardNew = ({ name, price, image, ingredients }) => {
  return (
    <div
      className="card"
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 123, 255, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text">
          <FaDollarSign className="text-success me-2" />
          <span className="fw-semibold">${price}</span>
        </p>
        <p className="card-text">
          <FaUtensils className="text-primary me-2" />
          <span>{ingredients.join(", ")}</span>
        </p>
        <div className="d-flex justify-content-around mt-3">
          <a
            href="#"
            className="btn btn-outline-primary d-flex align-items-center"
          >
            <FaInfoCircle className="me-2" /> Ver más
          </a>
          <a href="#" className="btn btn-primary d-flex align-items-center">
            <FaCartPlus className="me-2" /> Añadir
          </a>
        </div>
      </div>
    </div>
  );
};

CardNew.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CardNew;
