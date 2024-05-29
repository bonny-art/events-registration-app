import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const InputFormContainer = styled(Form)`
  background-color: ${({ theme }) => theme.colors.buttonWhite};
  border-radius: 27px;

  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 539px) {
    padding: 30px;
  }

  @media (max-width: 424px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textBlack};
`;

export const FormField = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.textBlack};

  gap: 10px;
`;

export const FormInput = styled(Field)`
  max-width: 260px;
  height: 44px;

  padding: 13px 18px;

  border: 1px solid ${({ theme }) => theme.colors.textGray};
  border-radius: 60px;

  color: ${props => props.theme.colors.textBlack};
  font-size: 12px;
  line-height: 1.5;

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

export const ErrorMessageStyled = styled.div`
  position: absolute;

  bottom: -20px;
  left: 0;

  color: ${({ theme }) => theme.colors.accentOrange};
  font-size: 12px;
  line-height: 1.5;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 424px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  gap: 10px;

  font-size: 12px;
  line-height: 1.5;
`;
