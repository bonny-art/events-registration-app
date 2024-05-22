import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import CurrentEventPage from 'pages/CurrentEventPage';
import AddParticipantPage from 'pages/AddParticipantPage';

const HomePage = lazy(() => import('../../pages/HomePage'));
const EventsPage = lazy(() => import('../../pages/EventsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/event-list" element={<EventsPage />} />

        <Route
          path="/event/:eventId/participants"
          element={<CurrentEventPage />}
        />

        <Route
          path="/event/:eventId/add-participant"
          element={<AddParticipantPage />}
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

