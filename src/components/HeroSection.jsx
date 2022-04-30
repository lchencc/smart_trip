import React from 'react';
import { Button } from './Button.jsx';

import '../App.css';
import './styles/HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Best Guide for Your Trip</h1>
      <p>Ready to go?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          tolink="/plan"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          tolink="/contact"
        >
          Contact
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
