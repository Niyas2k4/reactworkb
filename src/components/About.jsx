import React from "react";
import { Container, Row, Col, Button, Breadcrumb, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Header Section */}
      <section className="text-center py-5">
        <h1 className="fw-bold">About</h1>
        <p className="text-secondary mx-auto" style={{ maxWidth: "600px" }}>
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>
        <Button variant="success" className="mt-3">
          AVAILABLE FOR HIRE
        </Button>
      </section>

      {/* Breadcrumb Section */}
      <div style={{ backgroundColor: "#1a1a1a", padding: "10px 0" }}>
        <Container>
          <Breadcrumb>
            <a href="/" id="about-firts-home">
              Home
            </a>
            <Breadcrumb.Item active style={{color:'white'}}>/ About</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>

      {/* About Content Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={5} className="mb-4 mb-md-0">
            <Card className="bg-dark border-0">
              <Card.Img
                variant="top"
                src="\src\assets\about-profile-img.jpg" // placeholder
                alt="About"
              />
            </Card>
          </Col>

          <Col md={7}>
            <h5 className="text-success mb-2">
              UI/UX Designer, Professional Photographer from New York & Web
              Developer.
            </h5>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Row className="mt-4">
              <Col sm={6}>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-chevron-right text-success"></i>{" "}
                    <strong>Birthday:</strong> 1 May 1995
                  </li>
                  <li>
                    <i className="bi bi-chevron-right text-success"></i>{" "}
                    <strong>Website:</strong> www.example.com
                  </li>
                  <li>
                    <i className="bi bi-chevron-right text-success"></i>{" "}
                    <strong>Phone:</strong> +123 456 7890
                  </li>
                  <li>
                    <i className="bi bi-chevron-right text-success"></i>{" "}
                    <strong>City:</strong> New York, USA
                  </li>
                </ul>
              </Col>

              <Col sm={6}>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-chevron-right text-success"></i>{" "}
                    <strong>Age:</strong> 30
                  </li>
                  <li>
                    <i className="bi bi-chevron-right text-success"></i>{" "}
                    <strong>Degree:</strong> Master
                  </li>
                  <li>
                    <i className="bi bi-chevron-right text-success"></i>{" "}
                    <strong>Email:</strong> email@example.com
                  </li>
                  <li>
                    <i className="bi bi-chevron-right text-success"></i>{" "}
                    <strong>Freelance:</strong> Available
                  </li>
                </ul>
              </Col>
            </Row>

            <p className="text-secondary mt-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>

            <p className="text-secondary">
              Recusandae est praesentium consequatur eos voluptatem. Vitae
              dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas.
              Maxime corporis aut iusto suscipit aut cum nemo deleniti aut omnis.
              Doloribus molestiae officia soluta eligendi fugiat omnis enim.
              Numquam alias sint possimus est. Ratione in earum eum magni totam.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
