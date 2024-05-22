import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  align-items: center;

  border-radius: 24px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1;

  color: ${({ theme }) => theme.colors.textWhite};
  background-color: ${({ theme }) => theme.colors.green};

  padding: 10px 16px;

  transition: background-color ${({ theme }) => theme.animation.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenAccent};
  }

  &.select {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    min-width: 128px;
  }
`;
