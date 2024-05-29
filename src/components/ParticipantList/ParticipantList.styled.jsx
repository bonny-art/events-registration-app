import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 32px;

  @media (max-width: 1023px) {
    gap: 25px;
  }

  @media (max-width: 767px) {
    gap: 20px;
  }
`;
