import styled from '@emotion/styled';

export const HeroSection = styled.div`
  padding: 50px 0;

  @media (max-width: 904px) {
    padding: 30px 0;
  }
`;

export const HeroContainer = styled.div`
  min-width: 320px;
  max-width: 1352px;

  padding: 0 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  position: relative;

  gap: 40px;

  @media (max-width: 374px) {
    padding: 0 10px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-width: 70%;

  @media (max-width: 767px) {
    max-width: 100%;
  }

  h2 {
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textBlack};

    @media (max-width: 1023px) {
      font-size: 25px;
    }
  }

  h1 {
    font-size: 48px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};

    @media (max-width: 1023px) {
      font-size: 30px;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.accentOrange};
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textGray};

    @media (max-width: 1023px) {
      font-size: 16px;
    }
  }
`;

export const HeroButtonBox = styled.div`
  @media (max-width: 424px) {
    text-align: center;
  }
`;

export const Img01 = styled.img`
  width: 60%;
  height: auto;
  margin-left: auto;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const BenefitsSection = styled.div`
  padding: 50px 0;

  @media (max-width: 904px) {
    padding: 30px 0;
  }
`;

export const BenefitsContainer = styled.div`
  min-width: 320px;
  max-width: 1352px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 374px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  ul {
    display: flex;
    gap: 30px;

    @media (max-width: 904px) {
      flex-direction: column;
      align-items: center;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    width: calc((100% - (30px * 2)) / 3);

    @media (max-width: 904px) {
      width: 100%;
      max-width: 500px;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.accent};
    text-align: center;
    margin-bottom: 50px;

    @media (max-width: 1023px) {
      font-size: 30px;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    color: ${({ theme }) => theme.colors.accentOrange};

    @media (max-width: 1023px) {
      font-size: 25px;
    }
  }

  p {
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textGray};

    @media (max-width: 1023px) {
      font-size: 16px;
    }
  }
`;

export const AboutSection = styled.div`
  padding: 50px 0;

  @media (max-width: 904px) {
    padding: 30px 0;
  }
`;

export const AboutContainer = styled.div`
  min-width: 320px;
  max-width: 1352px;

  padding: 0 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  position: relative;

  gap: 40px;

  @media (max-width: 374px) {
    padding: 0 10px;
  }
`;

export const Img02 = styled.img`
  width: 60%;
  height: auto;
  margin-right: auto;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const AboutTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-width: 70%;

  text-align: right;
  margin-left: auto;

  @media (max-width: 767px) {
    max-width: 100%;
  }

  h2 {
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textBlack};

    @media (max-width: 1023px) {
      font-size: 25px;
    }
  }

  h1 {
    font-size: 48px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};

    @media (max-width: 1023px) {
      font-size: 30px;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.accentOrange};
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textGray};

    @media (max-width: 1023px) {
      font-size: 16px;
    }
  }
`;

export const AboutButtonBox = styled.div`
  text-align: right;

  @media (max-width: 424px) {
    text-align: center;
  }
`;
