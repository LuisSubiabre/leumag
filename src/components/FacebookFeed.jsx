import { Container } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";

const FacebookFeed = () => {
  return (
    <Container className="mt-4">
      <div className="bg-body-tertiary p-4 rounded-3 shadow-sm">
        <div className="d-flex align-items-center mb-3">
          <FaFacebook className="text-primary me-2" size={24} />
          <h4 className="mb-0 text-body">Últimas Publicaciones</h4>
        </div>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/leumagoficial"
          data-tabs="timeline"
          data-width="500"
          data-height="500"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
          style={{
            backgroundColor: "var(--bs-body-bg)",
            color: "var(--bs-body-color)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <blockquote
            cite="https://www.facebook.com/leumagoficial"
            className="fb-xfbml-parse-ignore"
          >
            <a
              href="https://www.facebook.com/leumagoficial"
              className="text-body"
            >
              Liceo Experimental UMAG
            </a>
          </blockquote>
        </div>
      </div>
    </Container>
  );
};

export default FacebookFeed;
