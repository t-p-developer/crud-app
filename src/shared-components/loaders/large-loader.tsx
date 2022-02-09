import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';

import { LargeOverlay } from './styles';

export const LargeSpinner = () => (
  <LargeOverlay>
    <CircularProgress size={160} />
  </LargeOverlay>
);

export default LargeSpinner;
