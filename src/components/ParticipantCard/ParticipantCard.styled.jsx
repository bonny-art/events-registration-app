import styled from '@emotion/styled';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  border: 1.15px solid ${({ theme }) => theme.colors.green};
  border-radius: 20px;
  padding: 36px;
  background-color: ${({ theme }) => theme.colors.backgroundGreen};

  width: 416px;
  height: 150px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textBlack};
`;

export const Email = styled.p`
  color: ${({ theme }) => theme.colors.textGray};
`;
