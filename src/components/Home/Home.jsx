import React, { useEffect } from 'react';
import {
  AboutSection,
  AboutTextBox,
  BenefitsSection,
  Container,
  HeroSection,
  Img01,
  Img02,
  ImgCover01,
  ImgCover02,
  TextBox,
} from './Home.styled';
import { Button } from 'components/Button/Button';
import { Link } from 'react-router-dom';

import img1 from '../../images/home_1.webp';
import img2 from '../../images/home_2.webp';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <HeroSection>
        <TextBox>
          <h2>Welcome to GeekGather!</h2>
          <h1>
            Discover, Connect, and Elevate <span>Your IT Experience</span>
          </h1>
          <p>
            Are you passionate about technology, innovation, and networking?
            Look no further! GeekGather is your ultimate hub for all things
            IT-related. Whether you’re a seasoned developer, a curious student,
            or an aspiring tech enthusiast, we’ve got something exciting in
            store for you.
          </p>
        </TextBox>

        <div>
          <Link to={'/catalog'}>
            <Button className="home">Events</Button>
          </Link>
        </div>

        <Img01 src={img1} alt="IT" />

        <ImgCover01></ImgCover01>
      </HeroSection>

      <BenefitsSection>
        <h2>What’s GeekGather All About?</h2>
        <ul>
          <li>
            <h3>Explore Engaging Events</h3>
            <p>
              Dive into a treasure trove of tech events! From hackathons and
              workshops to conferences and webinars, we curate the best IT
              gatherings just for you.
            </p>
          </li>

          <li>
            <h3>Stay Informed</h3>
            <p>
              Get the latest updates on upcoming events, speakers, and trending
              topics. Our event listings cover everything from AI and
              cybersecurity to cloud computing and blockchain.
            </p>
          </li>

          <li>
            <h3>Connect with Experts</h3>
            <p>
              GeekGather isn’t just about events; it’s about building
              connections. Network with industry leaders, share ideas, and
              collaborate on groundbreaking projects.
            </p>
          </li>
        </ul>
      </BenefitsSection>

      <AboutSection>
        <AboutTextBox>
          <h2>
            Ready to <span>Geek Out</span>?
          </h2>
          <p>
            Join us on this exhilarating journey. GeekGather—it’s where passion
            meets pixels, where bytes become brilliance, and where you belong.
          </p>
          <Link to={'/catalog'}>
            <Button className="home">Explore Upcoming Events</Button>
          </Link>
        </AboutTextBox>

        <Img02 src={img2} alt="IT" />

        <ImgCover02></ImgCover02>
      </AboutSection>
    </Container>
  );
};
