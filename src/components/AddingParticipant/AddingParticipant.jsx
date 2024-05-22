import React from 'react';
import { Container, Section } from './AddingParticipant.styled';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

export const AddingParticipant = () => {
  return (
    <Container>
      <Section>
        <RegistrationForm />
      </Section>
    </Container>
  );
};
