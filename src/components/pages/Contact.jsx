import React from 'react';
import '../../App.css';
import '../styles/Team.css';
import '../styles/Footer.css';

import pic_link from "../../assets/images/me.jpg"

function Contact() {
  return (
    <div class="container">
    <div class="profiles">
      <div class="profile">
        <img alt="profile" src={pic_link} class="profile-img"/>

        <h3 class="user-name">Liangyu Chen</h3>
        <p></p>

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
        <p>Please feel free to check out my personal website: &nbsp;
          <a
            href="https://www.liangyuc.com"
            target='_blank'
            rel="noreferrer"
          >
            liangyu.com
          </a>
        </p>
      </div>
    </div>


    </div>
  );
}

export default Contact;