import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 40px;

  a {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    position: relative;

    &.active {
      color: ${({ theme }) => theme.colors.accent};

      ${({ position, theme }) =>
        position === 'header'
          ? `
            &::after {
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              bottom: -31px;
              height: 5px;
              background-color: ${theme.colors.orange};
            }
          `
          : ''}
    }
  }
`;
