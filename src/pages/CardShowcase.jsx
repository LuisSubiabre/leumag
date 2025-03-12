import { Container, Row, Col } from "react-bootstrap";
import CardExamples from "../components/CardExamples";
import CardNew from "../components/CardNew";
import { FaUtensils, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const CardShowcase = () => {
  // Datos de ejemplo para CardNew
  const productosEjemplo = [
    {
      id: 1,
      name: "Pizza Margherita",
      price: 12.99,
      image: "https://via.placeholder.com/300x200?text=Pizza+Margherita",
      ingredients: [
        "Masa",
        "Tomate",
        "Mozzarella",
        "Albahaca",
        "Aceite de oliva",
      ],
    },
    {
      id: 2,
      name: "Hamburguesa Clásica",
      price: 9.99,
      image: "https://via.placeholder.com/300x200?text=Hamburguesa",
      ingredients: ["Pan", "Carne", "Lechuga", "Tomate", "Cebolla", "Queso"],
    },
    {
      id: 3,
      name: "Ensalada César",
      price: 8.5,
      image: "https://via.placeholder.com/300x200?text=Ensalada+Cesar",
      ingredients: [
        "Lechuga romana",
        "Pollo",
        "Crutones",
        "Queso parmesano",
        "Salsa césar",
      ],
    },
  ];

  return (
    <Container className="py-5">
      <h1 className="mb-5 text-center">Showcase de Tarjetas con Iconos</h1>

      <section className="mb-5">
        <h2 className="mb-4">
          <FaUtensils className="me-2 text-primary" />
          Tarjetas de Productos
        </h2>
        <Row>
          {productosEjemplo.map((producto) => (
            <Col md={4} key={producto.id} className="mb-4">
              <CardNew {...producto} />
            </Col>
          ))}
        </Row>
      </section>

      <section className="mb-5">
        <h2 className="mb-4">
          <FaInfoCircle className="me-2 text-primary" />
          Tarjetas Informativas
        </h2>
        <CardExamples />
      </section>

      <section className="text-center mt-5">
        <h3 className="mb-4">
          <FaShoppingCart className="me-2 text-success" />
          ¿Cómo usar estas tarjetas?
        </h3>
        <p className="lead">
          Estas tarjetas están diseñadas para ser reutilizables en toda la
          aplicación. Puedes personalizar los iconos, colores y contenido según
          tus necesidades.
        </p>
        <div className="bg-light p-4 rounded">
          <pre className="mb-0 text-start">
            <code>
              {`
// Importar el componente
import CustomCard from '../components/CustomCard';
import { FaBook } from 'react-icons/fa';

// Usar el componente
<CustomCard
  title="Mi Tarjeta"
  titleIcon={<FaBook className="text-primary" />}
  borderColor="info"
>
  <p>Contenido de la tarjeta</p>
</CustomCard>
              `}
            </code>
          </pre>
        </div>
      </section>
    </Container>
  );
};

export default CardShowcase;
