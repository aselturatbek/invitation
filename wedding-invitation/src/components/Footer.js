import React from 'react';
import '../styles/Footer.css';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img4.jpg';
import img4 from '../assets/images/img6.jpg';

const Footer = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <img src={img2} alt="img2" className="carousel-image" />
        <img src={img3} alt="img3" className="carousel-image" />
        <img src={img4} alt="img4" className="carousel-image" />
      </div>
    </div>
  );
};

export default Footer;
