import { css } from '@emotion/react';
import { theme } from 'styles/theme';

import InterRegular from '../fonts/Inter-Regular.ttf';
import InterMedium from '../fonts/Inter-Medium.ttf';
import InterSemiBold from '../fonts/Inter-SemiBold.ttf';
import InterBold from '../fonts/Inter-Bold.ttf';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    font-style: normal;
    src: url(${InterRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 500;
    font-style: normal;
    src: url(${InterMedium}) format('truetype');
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 600;
    font-style: normal;
    src: url(${InterSemiBold}) format('truetype');
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 700;
    font-style: normal;
    src: url(${InterBold}) format('truetype');
  }

  * {
    margin: 0;
  }

  body {
    background-color: ${theme.colors.backgroundGray};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    font-style: normal;
    color: ${theme.colors.textGray};
    width: 100%;
    height: 100%;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
`;
