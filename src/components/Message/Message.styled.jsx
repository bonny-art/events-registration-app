import styled from '@emotion/styled';

export const MessageBox = styled.div`
  display: flex;
  justify-content: center;

  padding: 200px 0;

  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
