import React from "react";
import { Container, Row, Col, Button, Carousel, Breadcrumb, Card } from "react-bootstrap";
import "./PortfolioDetails.css";

function PortfolioDetails() {
  const images = [
    "/src/assets/gallery-8.jpg",
    "/src/assets/gallery-9.jpg",
    "/src/assets/gallery-10.jpg",
    "/src/assets/gallery-11.jpg",
    "/src/assets/gallery-12.jpg",
  ];

  return (
    <div className="portfolio-details-section py-5 text-light">
      <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "70vh" }}>
        {/* Header Section */}
        <section className="text-center py-5">
          <h1 className="fw-bold">Gallery Single</h1>
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
              <Breadcrumb.Item active style={{ color: "white" }}>
                / Gallery Single 
              </Breadcrumb.Item>
            </Breadcrumb>
          </Container>
        </div>
      </div>

      <Container fluid className="d-flex flex-column align-items-center">
        {/* ✅ Carousel Section (auto-slide + taller height) */}
        <Carousel
          className="portfolio-carousel mb-5"
          fade
          indicators
          interval={2000}
          pause={false}
        >
          {images.map((src, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 carousel-img"
                src={src}
                alt={`Slide ${index + 1}`}
                style={{ height: "80vh", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Details Section */}
        <Container className="portfolio-content">
          <Row>
            <Col lg={8} className="mb-4">
              <h4 className="fw-bold mb-3">This is an example of portfolio details</h4>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eum dolore rem enim.
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero aut
                suscipit non ut natus. Est earum dignissimos ut nihil aut eum. Et eum ea
                eum voluptatem laborum sit.
              </p>
              <p>
                Aspernatur dolor veritatis omnis ex nam. Quae aut aspernatur pariatur ut
                tenetur tempora sunt. Nihil tempore mollitia corporis minima ea iste
                ullam unde eveniet. Eius omnis voluptate et reprehenderit quod nisi
                temporibus. Non minima nulla eum dolorem eius.
              </p>

              {/* ✅ Quote Box */}
              <Card className="quote-card p-4 mt-4" style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>
                <p className="fst-italic mb-2 text-white">
                  <i className="bi bi-quote"></i> Export tempor illum tamen malis eram quae
                  irure esse labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src="/src/assets/testimonials-2.jpg"
                    alt="author"
                    className="rounded-circle me-3"
                    style={{ width: "60px", height: "60px", objectFit: "cover" }} // smaller profile size
                  />
                  <div>
                    <h6 className="mb-0 text-white">Sara Wilson</h6>
                    <small className="text-white-50">Designer</small>
                  </div>
                </div>
              </Card>

              <p className="mt-4">
                Impedit ipsum quae et aliquid doloribus et voluptatem quisquam doloremque.
                Dolorem quo tempora. Quia et perferendis voluptatum perspiciatis. Officia
                quaerat et ut assumenda cupiditate aut aliquid inventore.
              </p>
            </Col>

            {/* Project Info */}
            <Col lg={4}>
              <div className="project-info p-4">
                <h5 className="fw-semibold mb-3">Project information</h5>
                <ul className="list-unstyled small">
                  <li>
                    <strong>Category:</strong> Web design
                  </li>
                  <li>
                    <strong>Client:</strong> ASU Company
                  </li>
                  <li>
                    <strong>Project date:</strong> 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL:</strong> www.example.com
                  </li>
                </ul>
                <Button variant="success" size="sm" className="mt-3">
                  Visit Website
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default PortfolioDetails;
