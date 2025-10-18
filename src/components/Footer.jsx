// Footer.jsx (All-in-one with inline styles)
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '30px 0',
    fontSize: '14px',
    borderTop: '1px solid #333'
  };

  const linkStyle = {
    color: '#ffd700',
    textDecoration: 'none',
    fontWeight: '600'
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="align-items-center">
          <Col >
            <div style={{ textAlign: 'left' }}>
              © Copyright <strong style={{ color: '#ffd700' }}>PhotoFolio</strong>. All Rights Reserved
            </div>
          </Col>
          <Col>
            <div className="d-flex ms-lg-3 socials">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
          <Col >
            <div style={{ textAlign: 'right' }}>
              Designed by{' '}
              <a 
                href="https://bootstrapmade.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseOver={(e) => e.target.style.color = '#ffed4a'}
                onMouseOut={(e) => e.target.style.color = '#ffd700'}
              >
                BootstrapMade
              </a>

            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;