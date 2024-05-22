import styled from '@emotion/styled';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.textWhite};
  padding: 20px 0;
`;

export const Section = styled.div`
  width: 1352px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 60px;
    height: 42px;
    fill: ${({ theme }) => theme.colors.textWhite};
  }

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
  }

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 20px;

  align-items: center;
`;
