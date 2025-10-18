import React from 'react'
import { Container, Row, Col, Button, Breadcrumb, Card } from "react-bootstrap";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaLink, FaExpand } from "react-icons/fa";
import "./HeadSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  { src: "/src/assets/gallery-1.jpg", link: "/GallerySingle", alt: "Tree" },
  { src: "/src/assets/gallery-2.jpg", link: "/GallerySingle", alt: "Hot Air Balloons" },
  { src: "/src/assets/gallery-3.jpg", link: "/GallerySingle", alt: "Green Landscape" },
  { src: "/src/assets/gallery-4.jpg", link: "/GallerySingle", alt: "Beach" },
  { src: "/src/assets/gallery-5.jpg", link: "/GallerySingle", alt: "Forest" },
  { src: "/src/assets/gallery-6.jpg", link: "/GallerySingle", alt: "Mountain" },
  { src: "/src/assets/gallery-7.jpg", link: "/GallerySingle", alt: "Lake" },
  { src: "/src/assets/gallery-8-2.jpg", link: "/GallerySingle", alt: "Desert" },
];

function Gallery() {
  return (
<>
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Header Section */}
      <section className="text-center py-5">
        <h1 className="fw-bold">Gallery</h1>
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
      <div style={{ backgroundColor: "#1a1a1a", padding: "10px 0" }}>
        <Container>
          <Breadcrumb>
            <a href="/" id="about-firts-home">
              Home
            </a>
            <Breadcrumb.Item active style={{color:'white'}}>/ Gallery</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
        <Row className="g-4" style={{marginTop:'15px'}}>
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
    </div>
</>
  )
}

export default Gallery
