import React from 'react';
import { Container, Section } from './EventInformation.styled';

import { FilterControls } from 'components/FilterControls/FilterControls';
import { Participants } from 'components/Participants/Participants';

export const EventInformation = () => {
  return (
    <Container>
      <Section>
        <div>
          <FilterControls />
        </div>
        <div>
          <Participants />
        </div>
      </Section>
    </Container>
  );
};
