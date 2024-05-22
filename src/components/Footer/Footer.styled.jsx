import styled from '@emotion/styled';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const NavSection = styled.div`
  width: 1352px;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 20px;

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

export const CopyrightContainer = styled.header`
  border-top: 3px solid ${({ theme }) => theme.colors.F7F8FA};
`;

export const CopyrightSection = styled.div`
  width: 1352px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 20px;
`;

export const Copyright = styled.div`
  text-align: center;

  p {
    font-weight: 500;
    font-size: 15px;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
  }
`;
