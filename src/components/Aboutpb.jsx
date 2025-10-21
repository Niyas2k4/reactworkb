import React from 'react';
import { Carousel, Card } from 'react-bootstrap';


const testimonials = [
  {
    name: 'Saul Goodman',
    title: 'CEO & Founder',
    img: '/testimonials-4.jpg', // Replace with your image path
    text: 'Pa corporis delenitisemper.roin iacuatur quasi soluta corporis delenitisemper.roin iacuatur quasi soluta corporis delenitisemper.roin iacuatur quasi soluta corporis delenitisemper.roin iacuatur quasi soluta corporis delenitisemper.roin iacuatur quasi soluta corporis delenitisemper. fbfgh roin iacuatur quasi soluta corporis delenitisemper. ffdhfthdfddhbz sddhghdfdh xddgd xgg roin iacuatur quasi soluta corporis delenitisemper.',
    rating: 5,
  },
  {
    name: 'Sara Wilsson',
    title: 'Designer',
    img: '/testimonials-3.jpg',
    text: 'Proin iacuatur quasi soluta corporis del dfhfg hghfg dfh enitisemper.roin iacua isemper.roin iacuatur quasi soluta corporis delenitisemper.roin iacuatur quasi soluta corporis delenitisemper.roin iacuatur quasi soluta corporis delenitisemper.roin iacuatur quasi soluta corporis delenitisemper. fbfgh roin iacuatur quasi soluta corporis delenitisemper. ffdhfthdfddhbz sddhghdfdh xddgd xgg roin iacuatur quasi soluta corporis delenitisemper.',
    rating: 5,
  },
  {
    name: 'Jena Karlis',
    title: 'Store Owner',
    img: '/testimonials-2.jpg',
    text: 'Ps delenitisemper.roin iacuatur quasi soluta corporis delenitisemper.roin iacuatur quasi soluta corporis delenitisemper.roin iacuatur quasi soluta corporis delenitisemper.roin iacuatur quasi soluta corporis delenitisemper.roin iacuatur quasi soluta corporis delenitisemper. fbfgh roin iacuatur quasi soluta corporis delenitisemper. ffdhfthdfddhbz sddhghdfdh xddgd xgg roin iacuatur quasi soluta corporis delenitisemper.',
    rating: 5,
  },
];

const TestimonialCard = ({ t, dimmed }) => (
  <Card
    className={`testimonial-card ${dimmed ? 'dimmed' : ''}`}
    style={{
      background: '#18191B',
      color: '#fff',
      border: 'none',
      alignItems: 'center',
      margin: '0 12px',
      width:'600px',
      minHeight: 450,
      boxShadow: dimmed ? 'none' : '0 4px 32px #000a',
      opacity: dimmed ? 0.54 : 1,
      filter: dimmed ? 'grayscale(80%)' : 'none',
    }}
  >
    <div style={{ paddingTop: 32, paddingBottom: 16 }}>
      {[...Array(t.rating)].map((_, i) => (
        <span key={i} style={{ color: '#fcc419', fontSize: 21, letterSpacing: 1 }}>★</span>
      ))}
    </div>
    <Card.Text style={{ fontStyle: 'italic', fontSize: 14, minHeight: 86 ,textAlign:'center'}}>{t.text}</Card.Text>
    <div className="mb-3 mt-2">
      <img
        src={t.img}
        alt={t.name}
        style={{ width: 108, height: 108, borderRadius: '50%', objectFit: 'cover', border: '3px solid #243241' }}
      />
    </div>
    <Card.Title style={{ marginBottom: 3, fontSize: 18 }}>{t.name}</Card.Title>
    <Card.Subtitle style={{ fontSize: 12, color: '#B0BABF' }}>{t.title}</Card.Subtitle>
  </Card>
);

const Aboutpb = () => (
  <div style={{ background: '#000', minHeight: '100vh', paddingTop: 50, paddingBottom: 50 }}>
    <div style={{ maxWidth: 1240, margin: 'auto' }}>
      <div style={{ textAlign: 'left', marginBottom: 32 }}>
        <div style={{ fontSize: 15, letterSpacing: 2, color: '#7ff8d3' }}>TESTIMONIALS</div>
        <h2 style={{ fontWeight: 400, fontFamily: 'serif', color: '#fff', margin: 0 }}>
          What they are saying
        </h2>
      </div>
      <Carousel
        interval={3000}
        controls={false}
        indicators={true}
        pause={false}
        data-bs-theme="dark"
        className="carousel-inner-center"
      >
        {testimonials.map((center, idx) => {
          // Previous and next indices in circular manner
          const prevIdx = (idx + testimonials.length - 1) % testimonials.length;
          const nextIdx = (idx + 1) % testimonials.length;
          return (
            <Carousel.Item key={idx}>
              <div className="d-flex justify-content-center align-items-center">
                <TestimonialCard t={testimonials[prevIdx]} dimmed={true} />
                <TestimonialCard t={center} dimmed={false} />
                <TestimonialCard t={testimonials[nextIdx]} dimmed={true} />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  </div>
);

export default Aboutpb;
