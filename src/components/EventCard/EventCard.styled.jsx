import styled from '@emotion/styled';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  border: 1px solid ${({ theme }) => theme.colors.buttonWhite};
  border-radius: 27px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundGreen};

  width: 416px;
  height: 358px;

  overflow: hidden;
`;
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textBlack};
`;

export const Date = styled.p`
  color: #93939a;
  color: ${({ theme }) => theme.colors.textGray};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textBlack};
`;

export const Organizer = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.greenAccent};
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
