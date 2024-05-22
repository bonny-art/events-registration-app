import React, { useEffect } from 'react';
import {
  AboutSection,
  AboutTextBox,
  BenefitsSection,
  Container,
  HeroSection,
  ImgCover01,
  ImgCover02,
  TextBox,
} from './Home.styled';
import { Button } from 'components/Button/Button';
import { Link } from 'react-router-dom';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <HeroSection>
        <TextBox>
          <h2>Campervan Hab</h2>
          <h1>
            Your Gateway to <span>Freedom!</span>
          </h1>
          <p>
            Explore freely with our trusted campervans. Make memories, find joy,
            and travel with confidence. Where adventures begin.
          </p>
        </TextBox>

        <div>
          <Link to={'/catalog'}>
            <Button className="form">Catalog</Button>
          </Link>
        </div>

        <ImgCover01></ImgCover01>
      </HeroSection>

      <BenefitsSection>
        <ul>
          <li>
            {/* <svg>
              <use href={`${sprite}#flexibility`} />
            </svg> */}
            <h2>Flexibility</h2>
            <p>Explore freely with Campervan Hab's versatile rentals.</p>
          </li>

          <li>
            {/* <svg>
              <use href={`${sprite}#adventure`} />
            </svg> */}
            <h2>Comfort</h2>
            <p>Cozy interiors ensure a restful journey every time.</p>
          </li>

          <li>
            {/* <svg>
              <use href={`${sprite}#comfort`} />
            </svg> */}
            <h2>Adventure</h2>
            <p>Embrace boundless exploration with Campervan Hab's offerings.</p>
          </li>
        </ul>
      </BenefitsSection>

      <AboutSection>
        <div></div>

        <AboutTextBox>
          <h2>Adventure Awaits</h2>
          <p>
            Gateway to adventure: flexible rentals, cozy comforts. Explore
            freely, create memories, embrace the thrill. Unforgettable journeys,
            quality service. Join us, embark on your next adventure.
          </p>
          <Link to={'/catalog'}>
            <Button className="form">Order</Button>
          </Link>
        </AboutTextBox>

        <ImgCover02></ImgCover02>
      </AboutSection>
    </Container>
  );
};
