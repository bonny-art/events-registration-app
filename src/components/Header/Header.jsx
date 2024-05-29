import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Container, Logo, Name, Section } from './Header.styled';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <Section>
        <Link to={'/'}>
          <Logo>
            <img src={logo} alt="Logo" width="25" height="25" />
            <Name>
              <p>
                <span>Geek</span>
              </p>
              <p>Gather</p>
            </Name>
          </Logo>
        </Link>

        <Navigation position="header" />
      </Section>
    </Container>
  );
};
