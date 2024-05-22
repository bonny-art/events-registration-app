import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 20px;

  overflow-x: hidden;
`;

export const HeroSection = styled.div`
  width: 1352px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;

  position: relative;

  gap: 40px;

  padding: 162px 0;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 700px;

  h2 {
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textBlack};
  }

  h1 {
    font-size: 48px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};
  }

  span {
    color: ${({ theme }) => theme.colors.accentOrange};
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textGray};
  }
`;

export const Img01 = styled.img`
  position: absolute;
  top: 0;
  left: 765px;
  z-index: -2;

  height: 620px;
  width: auto;
`;

export const ImgCover01 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 900px;
  height: 620px;

  background: linear-gradient(
    270deg,
    rgba(247, 248, 250, 0) 0%,
    rgba(247, 248, 250, 0.9) 11%,
    rgb(247, 248, 250) 15%
  );
`;

export const BenefitsSection = styled.div`
  width: 1352px;
  margin-left: auto;
  margin-right: auto;

  padding: 100px 20px;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    width: 424px;
  }

  h2 {
    font-weight: 500;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.accent};
    text-align: center;
    margin-bottom: 50px;
  }

  h3 {
    font-weight: 500;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.accentOrange};
  }

  p {
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textGray};
  }
`;

export const AboutSection = styled.div`
  position: relative;

  width: 1352px;
  margin-left: auto;
  margin-right: auto;

  padding-right: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 522px;
`;

export const AboutTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 40px;

  margin-left: auto;

  width: 700px;

  h2 {
    font-weight: 500;
    font-size: 44px;
    text-align: right;
    color: ${({ theme }) => theme.colors.accent};
  }

  span {
    color: ${({ theme }) => theme.colors.accentOrange};
  }

  p {
    font-weight: 500;
    font-size: 24px;
    text-align: right;
    color: ${({ theme }) => theme.colors.textGray};
  }
`;

export const Img02 = styled.img`
  position: absolute;
  top: 0;
  right: 765px;
  z-index: -2;

  height: 522px;
  width: auto;
`;

export const ImgCover02 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  width: 900px;
  height: 522px;

  background: linear-gradient(
    90deg,
    rgba(247, 248, 250, 0) 0%,
    rgba(247, 248, 250, 0.9) 11%,
    rgb(247, 248, 250) 15%
  );
`;
