import React from 'react';
import { Container, Section } from './Dashboard.styled';
import { Events } from 'components/Events/Events';
import { SortControls } from 'components/SortControls/SortControls';

export const Dashboard = () => {
  return (
    <Container>
      <Section>
        <div>
          <SortControls />
        </div>
        <div>
          <Events />
        </div>
      </Section>
    </Container>
  );
};
