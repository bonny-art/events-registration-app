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

  width: calc((100% - (2 * 32px)) / 3);
  height: auto;

  @media (max-width: 1023px) {
    padding: 20px;
    width: calc((100% - (25px)) / 2);
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 374px) {
    padding-left: 10px;
    padding-right: 10px;

    text-align: center;
  }
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textBlack};
`;

export const Email = styled.p`
  color: ${({ theme }) => theme.colors.textGray};

  @media (max-width: 374px) {
    font-size: 12px;
  }
`;
