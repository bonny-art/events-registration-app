import BeatLoader from 'react-spinners/BeatLoader';

import React from 'react';
import { theme } from 'styles';

export const Loader = () => {
  return (
    <BeatLoader
      color={theme.colors.green}
      size={25}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
