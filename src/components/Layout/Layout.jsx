import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <div>
        <Header />

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>

      <div>
        <Footer />
      </div>
    </Container>
  );
};
