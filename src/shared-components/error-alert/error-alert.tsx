import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import * as React from 'react';

type ErrorAlertProps = {
  toggleAlertBox: boolean;
  closeToggleAlertBox: () => void;
  error: {
    code: number;
    description: string;
  };
};

export const ErrorAlert = ({ toggleAlertBox, closeToggleAlertBox, error }: ErrorAlertProps) => (
  <Collapse in={toggleAlertBox}>
    <Alert severity='error' sx={{ mb: '25px' }} onClose={() => closeToggleAlertBox()}>
      <AlertTitle>{error?.code}</AlertTitle>
      {error?.description}
    </Alert>
  </Collapse>
);
