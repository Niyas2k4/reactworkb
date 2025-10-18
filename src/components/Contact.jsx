import React from 'react'
import { FaLink, FaExpand } from "react-icons/fa";
import "./HeadSection.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Container, Row, Col, Button, Form, Breadcrumb, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
<>

    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Header Section */}
      <section className="text-center py-5">
        <h1 className="fw-bold">Contact</h1>
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
            <Breadcrumb.Item active style={{color:'white'}}>/ Contact</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
<Container fluid className="contact-section bg-dark text-light py-5">
      <Row className="justify-content-center text-center mb-4">
        <Col md={3} className="contact-info">
          <div className="icon-box">
            <FaMapMarkerAlt />
          </div>
          <h5>Location</h5>
          <p>A108 Adam Street, New York, NY 535022</p>
        </Col>
        <Col md={3} className="contact-info">
          <div className="icon-box">
            <FaPhoneAlt />
          </div>
          <h5>Call</h5>
          <p>+1 5589 55488 55</p>
        </Col>
        <Col md={3} className="contact-info">
          <div className="icon-box">
            <FaEnvelope />
          </div>
          <h5>Email</h5>
          <p>info@example.com</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Control type="text" placeholder="Your Name" className="mb-3 bg-dark text-light border-secondary" />
              </Col>
              <Col md={6}>
                <Form.Control type="email" placeholder="Your Email" className="mb-3 bg-dark text-light border-secondary" />
              </Col>
            </Row>
            <Form.Control type="text" placeholder="Subject" className="mb-3 bg-dark text-light border-secondary" />
            <Form.Control as="textarea" rows={5} placeholder="Message" className="mb-3 bg-dark text-light border-secondary" />
            <div className="text-center">
              <Button variant="success" type="submit" className="px-5">
                SEND MESSAGE
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
      </div>

</>
  )
}

export default Contact
