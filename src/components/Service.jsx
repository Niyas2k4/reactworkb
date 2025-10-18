import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Service.css";

function Service() {
  const services = [
    { icon: "bi-activity", title: "Lorem Ipsum", text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" },
    { icon: "bi-bounding-box-circles", title: "Sed ut perspici", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
    { icon: "bi-calendar4-week", title: "Magni Dolores", text: "Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia" },
    { icon: "bi-broadcast", title: "Nemo Enim", text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis" },
  ];

  const pricing = [
    { name: "Portrait Photography", price: "$160.00" },
    { name: "Sports Photography", price: "$200.00" },
    { name: "Wedding Photography", price: "$500.00" },
    { name: "Fashion Photography", price: "$300.00" },
    { name: "Still Life Photography", price: "$120.00" },
    { name: "Photojournalism", price: "$200.00" },
  ];

  return (
    <div className="service-section py-5 text-light">
      <Container>

        {/* Service Cards */}
        <Row className="g-4 justify-content-center">
          {services.map((s, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="service-card text-start p-4 h-100" >
                <div className="icon-wrap mb-3">
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <h5 className="fw-bold">{s.title}</h5>
                <p className="text-muted small">{s.text}</p>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pricing Section */}
        <div className="pricing-section mt-5">
          <p className="text-uppercase text-success fw-semibold small mb-2">Pricing</p>
          <h2 className="fw-bold mb-5">Check my adorable pricing</h2>

          <Row className="g-4">
            <Col md={6}>
              {pricing.slice(0, 3).map((p, i) => (
                <div key={i} className="pricing-item d-flex justify-content-between align-items-center py-2 border-bottom">
                  <span className="fw-semibold">{p.name}</span>
                  <span className="text-success">{p.price}</span>
                </div>
              ))}
            </Col>
            <Col md={6}>
              {pricing.slice(3).map((p, i) => (
                <div key={i} className="pricing-item d-flex justify-content-between align-items-center py-2 border-bottom">
                  <span className="fw-semibold">{p.name}</span>
                  <span className="text-success">{p.price}</span>
                </div>
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Service;
