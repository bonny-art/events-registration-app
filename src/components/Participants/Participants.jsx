import React, { useEffect } from 'react';
import { Container, LoaderBox } from './Participants.styled';
import { ParticipantList } from 'components/ParticipantList/ParticipantList';
import { Message } from 'components/Message/Message';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  participantsActions,
  participantsSelectors,
} from 'store/participants/participantsSlice';
import { useParams } from 'react-router-dom';

export const Participants = () => {
  const dispatch = useDispatch();
  const { eventId } = useParams();

  const isLoading = useSelector(participantsSelectors.selectIsLoading);
  const participants = useSelector(
    participantsSelectors.selectFilteredParticipants
  );

  useEffect(() => {
    dispatch(participantsActions.getParticipantsAction({ eventId }));
  }, [dispatch, eventId]);

  return (
    <Container>
      {isLoading ? (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      ) : (
        <>
          {participants.length ? (
            <ParticipantList participants={participants} />
          ) : (
            <Message>
              There are no registred participants for this event. You can be the
              first.
            </Message>
          )}
        </>
      )}
    </Container>
  );
};
