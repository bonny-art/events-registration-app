import styled from '@emotion/styled';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  height: 100%;

  border: 1px solid ${({ theme }) => theme.colors.buttonWhite};
  border-radius: 27px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundGreen};

  width: calc((100% - (2 * 32px)) / 3);
  height: auto;

  overflow: hidden;

  @media (max-width: 1023px) {
    padding: 20px;
    width: calc((100% - (25px)) / 2);
  }

  @media (max-width: 767px) {
    width: calc((100% - (20px)) / 2);
  }

  @media (max-width: 499px) {
    width: 100%;
  }
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
