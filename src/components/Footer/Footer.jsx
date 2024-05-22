import React from 'react';
import {
  Container,
  Copyright,
  CopyrightContainer,
  CopyrightSection,
  Logo,
  NavSection,
} from './Footer.styled';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { Navigation } from 'components/Navigation/Navigation';

export const Footer = () => {
  return (
    <Container>
      <NavSection>
        <Link to={'/'}>
          <Logo>
            <img src={logo} alt="Logo" width="25" height="25" />
            <p>
              <span>Geek</span>Gather
            </p>
          </Logo>
        </Link>

        <Navigation position="footer" />
      </NavSection>

      <CopyrightContainer>
        <CopyrightSection>
          <Copyright>
            <p>
              Developed by{' '}
              <a
                href="https://www.linkedin.com/in/svitlana-otenko/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Svitlana Otenko
              </a>
            </p>
          </Copyright>
        </CopyrightSection>
      </CopyrightContainer>
    </Container>
  );
};
