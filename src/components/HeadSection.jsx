import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaLink, FaExpand } from "react-icons/fa";
import "./HeadSection.css";

const images = [
  { src: "/gallery-1.jpg", link: "/GallerySingle", alt: "Tree" },
  { src: "/gallery-2.jpg", link: "/GallerySingle", alt: "Hot Air Balloons" },
  { src: "/gallery-3.jpg", link: "/GallerySingle", alt: "Green Landscape" },
  { src: "/gallery-4.jpg", link: "/GallerySingle", alt: "Beach" },
  { src: "/gallery-5.jpg", link: "/GallerySingle", alt: "Forest" },
  { src: "/gallery-6.jpg", link: "/GallerySingle", alt: "Mountain" },
  { src: "/gallery-7.jpg", link: "/GallerySingle", alt: "Lake" },
  { src: "/gallery-8-2.jpg",link: "/GallerySingle", alt: "Desert" },
];

const HeadSection = () => {
  return (
    <section className="head-section text-center py-5 bg-dark text-light">
      <Container>
        <h1 className="display-5 fw-bold mb-3">
          I'm <span className="highlight">Jenny Wilson</span> a Professional
          Photographer from New York City
        </h1>
        <p className="lead mb-4">
          Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem
          magni est deserunt sed qui libero. Qui voluptas amet.
        </p>
        <Button variant="success" size="lg" className="mb-5">
          AVAILABLE FOR HIRE
        </Button>

        <Row className="g-4">
          {images.map((img, idx) => (
            <Col key={idx} xs={12} sm={6} md={3}>
              <Card className="image-card border-0 overflow-hidden">
                <div className="image-container">
                  <Card.Img src={img.src} alt={img.alt} className="image" />
                  <div className="overlay d-flex justify-content-center align-items-center gap-3">
                    <a href={img.link} target="_blank" rel="noopener noreferrer">
                      <FaLink className="icon" />
                    </a>
                    <a href={img.src} target="_blank" rel="noopener noreferrer">
                      <FaExpand className="icon" />
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HeadSection;
