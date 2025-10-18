import React from 'react'
import { Container, Row, Col, Button, Breadcrumb, Card } from "react-bootstrap";


function ServiceTop() {
  return (
<div style={{ backgroundColor: "#000", color: "#fff", minHeight: "70vh" }}>
      {/* Header Section */}
      <section className="text-center py-5">
        <h1 className="fw-bold">Services</h1>
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
            <Breadcrumb.Item active style={{color:'white'}}>/ Services</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
    </div>
  )
}

export default ServiceTop
