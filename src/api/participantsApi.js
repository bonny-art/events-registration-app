import axios from 'axios';
import { serverConstants } from 'constants/serverConstants';

axios.defaults.baseURL = serverConstants.BASE_URL;

export const getParticipants = async params => {
  const { data } = await axios.get(serverConstants.PARTICIPANTS_ENDPOINT, {
    params,
  });

  return data;
};

export const addParticipant = async ({ eventId, participant }) => {
  const { fullName, email, dateOfBirth, heardAboutEvent } = participant;

  const body = {
    full_name: fullName,
    email,
    date_of_birth: dateOfBirth,
    heard_about_event: heardAboutEvent,
  };
  const { data } = await axios.post(
    serverConstants.PARTICIPANTS_ENDPOINT,
    body,
    { params: { eventId } }
  );

  return data;
};
