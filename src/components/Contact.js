import React from 'react';
import AccentComponent from './AccentComponent';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div id="contactCards">
        <div className="contact-link">
          <a
            href="https://www.linkedin.com/in/madden-purcell/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/linkedin.svg"
              alt="LinkedIn"
              style={{ width: '200px', height: '200px' }}
            />
          </a>
        </div>
        <div className="contact-link">
          <a
            href="https://www.linkedin.com/in/madden-purcell/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/github-2.svg"
              alt="Github"
              style={{ width: '100px', height: '100px' }}
            />
          </a>
        </div>
        <div className="contact-link">
          <img
            src="https://cdn.worldvectorlogo.com/logos/gmail-icon.svg"
            alt="Email Icon"
            style={{ width: '100px', height: '100px' }}
          />
          <a href="mailto: maddenpurcell@gmail.com">
            {' '}
            maddenpurcell@gmail.com{' '}
          </a>
        </div>
      </div>
      <AccentComponent />
    </div>
  );
}
