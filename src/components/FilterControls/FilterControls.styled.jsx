import styled from '@emotion/styled';

export const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FormField = styled.label`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const FormInput = styled.input`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.textGray};
  border-radius: 60px;
  max-width: 300px;
  height: 44px;
  padding: 13px 18px;
  background: ${({ theme }) => theme.colors.buttonWhite};

  transition: background-color ${({ theme }) => theme.animation.transition},
    border-color ${({ theme }) => theme.animation.transition};

  &::placeholder {
    font-size: 12px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.blackTransp};
  }

  &:focus-visible {
    outline: none;
    background-color: ${({ theme }) => theme.colors.backgroundGreen};
    border-color: ${({ theme }) => theme.colors.green};
  }

  &:hover,
  &:not(:placeholder-shown) {
    background-color: ${({ theme }) => theme.colors.backgroundGreen};
    border-color: ${({ theme }) => theme.colors.green};
  }
`;
