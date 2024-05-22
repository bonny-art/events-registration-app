import React from 'react';
import { Container, Email, Name } from './ParticipantCard.styled';

export const ParticipantCard = ({ participant }) => {
  const { _id, full_name, email } = participant;
  return (
    <>
      <Container key={_id}>
        <Name>{full_name}</Name>
        <Email>{email}</Email>
      </Container>
    </>
  );
};
