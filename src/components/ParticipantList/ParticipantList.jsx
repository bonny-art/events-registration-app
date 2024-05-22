import React from 'react';

import { Container } from './ParticipantList.styled';
import { ParticipantCard } from 'components/ParticipantCard/ParticipantCard';

export const ParticipantList = ({ participants }) => {
  return (
    <Container>
      {participants.map(e => (
        <ParticipantCard key={e._id} participant={e} />
      ))}
    </Container>
  );
};
