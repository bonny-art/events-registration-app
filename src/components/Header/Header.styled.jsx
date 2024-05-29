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
  max-width: 1352px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 374px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  svg {
    width: 60px;
    height: 42px;
    fill: ${({ theme }) => theme.colors.textWhite};
  }

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 20px;

  align-items: center;

  @media (max-width: 767px) {
    gap: 10px;
  }

  span {
    color: ${({ theme }) => theme.colors.accent};

    transition: color ${({ theme }) => theme.animation.transition};
  }

  &:hover span {
    color: ${({ theme }) => theme.colors.accentOrange};
  }
`;

export const Name = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
