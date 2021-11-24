import React from 'react';
import AccentComponent from './AccentComponent';

export default function Contact() {
  return (
    <div>
      <div className="contact-div">
        <h1>Contact</h1>
        <div className="contact-cards">
          <div className="contact-link">
            <a
              href="https://www.linkedin.com/in/madden-purcell/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
          <div className="contact-link">
            <a
              href="https://github.com/pmpurcell"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/github-2.svg"
                alt="Github"
              />
            </a>
          </div>
          <div className="contact-link">
            <a href="mailto: maddenpurcell@gmail.com">
              <img
                src="https://cdn.worldvectorlogo.com/logos/gmail-icon.svg"
                alt="Email Icon"
              />
            </a>
          </div>
        </div>
      </div>
      <AccentComponent />
    </div>
  );
}
