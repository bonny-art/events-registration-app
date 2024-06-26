import React from 'react';
import moment from 'moment';

import {
  ButtonBox,
  Container,
  Date,
  Description,
  Organizer,
  Title,
} from './EventCard.styled';
import { Button } from 'components/Button/Button';
import { Link } from 'react-router-dom';

export const EventCard = ({ event }) => {
  return (
    <Container key={event._id}>
      <Title>{event.title}</Title>
      <Date>{moment(event.event_date).format('MMMM D, YYYY')}</Date>
      <Description>{event.description}</Description>
      <Organizer>{event.organizer}</Organizer>

      <ButtonBox>
        <Link to={`/event/${event._id}/add-participant`}>
          <Button>Register</Button>
        </Link>

        <Link to={`/event/${event._id}/participants`}>
          <Button>View</Button>
        </Link>
      </ButtonBox>
    </Container>
  );
};
