import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Container, Logo, Section } from './Header.styled';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <Section>
        <Link to={'/'}>
          <Logo>
            <img src={logo} alt="Logo" width="25" height="25" />

            <p>
              <span>Geek</span>Gather
            </p>
          </Logo>
        </Link>

        <Navigation position="header" />
      </Section>
    </Container>
  );
};
