import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 32px 0 57px;
`;

export const Section = styled.div`
  max-width: 1352px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 100%;

  @media (max-width: 374px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
