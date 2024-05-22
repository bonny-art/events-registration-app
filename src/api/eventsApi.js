import axios from 'axios';
import { serverConstants } from 'constants/serverConstants';

axios.defaults.baseURL = serverConstants.BASE_URL;

export const getEvents = async params => {
  const { data } = await axios.get(serverConstants.EVENTS_ENDPOINT, { params });

  return data;
};
