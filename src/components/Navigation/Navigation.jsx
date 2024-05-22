import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './Navigation.styled';

export const Navigation = ({ position }) => {
  return (
    <Container position={position}>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/event-list'}>Event List</NavLink>
    </Container>
  );
};
