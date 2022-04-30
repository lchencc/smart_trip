import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button.jsx';

import './styles/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe to the Smart Trip newsletter to receive our best vacation advice.
        </p>
        <div className="input-areas">
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Please enter your email"
              className="footer-input"
            />
            <Button color="black" tolink="/contact">Subscribe</Button>
          </form>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Smart Trip
            </Link>
          </div>
          <small className="website-rights">Smart Trip copyright 2022</small>
          <div className="social-icons">
            <a
              class='social-icon-link github'
              href="https://github.com/lchencc/smart_trip"
              target='_blank'
              rel="noreferrer"
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link facebook'
              href="https://www.facebook.com/larry.chen.14289"
              target='_blank'
              rel="noreferrer"
              aria-label='Facebook'
            >
              <i class='fab fa-facebook' />
            </a>
            <a
              class='social-icon-link linkedin'
              href="https://www.linkedin.com/in/liangyuc/"
              target='_blank'
              rel="noreferrer"
              aria-label='Linkedin'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link Envelope'
              href="mailto:liangyu.c@outlook.com"
              target='_blank'
              rel="noreferrer"
              aria-label='Envelope'
            >
              <i class='fab fa-microsoft' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
