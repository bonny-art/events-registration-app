import React from 'react';

import { EventCard } from 'components/EventCard/EventCard';
import { Container } from './EventList.styled';

export const EventList = ({ events }) => {
  return (
    <Container>
      {events.map(e => (
        <EventCard key={e._id} event={e} />
      ))}
    </Container>
  );
};
