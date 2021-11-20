import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function About() {
  return (
    <div>
      <div id="aboutDiv">
        <div id="imageCarousel">
          <h1>Who I Am</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/hVkoM4K.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Traveller</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media-exp1.licdn.com/dms/image/C4E22AQHVaauCiVUOSw/feedshare-shrink_1280/0/1637275236374?e=1640217600&v=beta&t=OLrv78NTcchZKplNistfx9KbIQFJDCOB3kbgsf3lUAY"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Educator</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.bandmix.com/bandmix_us/media/1177/1177535/1501487-l.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Musician</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div id="aboutInfoBlock">
          <div id="aboutText">
            <h1>My Story</h1>
            <p>
              I am a lifelong Tennessee resident who enjoys music and teaching.
              I graduated from Tennessee Technological University with a degree
              in History and Spanish, and from there I entered the field of
              informal education and museum learning.
            </p>
            <p>
              Like many people, my life and career changed forever with the
              onset of COVID-19. With my work hours reduced, I decided to pick
              up coding in my free time, and immediately fell in love. I
              enrolled in Nashville Software School and began my Web-Development
              Boot Camp in July of 2021.
            </p>
          </div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHGo4RcetN_3g/profile-displayphoto-shrink_800_800/0/1543973366552?e=1642636800&v=beta&t=PnKu7y5GklOHjfbynV2FcsoYf0ynXIBsQcg3pN5-q74"
            alt="Madden Purcell"
          />
        </div>
      </div>
    </div>
  );
}
