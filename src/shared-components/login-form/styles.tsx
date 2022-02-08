import { styled } from '@mui/material/styles';

export const Form = styled('form')({
  width: '100%',
  boxSizing: 'border-box',
  maxWidth: '460px',
  padding: '20px'
});
export const FormInputWrapper = styled('div')({
  position: 'relative'
});

export const SmallOverlayContainer = styled('div')({
  position: 'absolute',
  width: '40%',
  height: '50%',
  backgroundColor: '#FFFFFF'
});

export const SmallOverlay = styled('div')({
  display: 'flex',
  flexFlow: 'column wrap',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
});
