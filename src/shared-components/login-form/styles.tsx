import { styled } from '@mui/material/styles';

export const Form = styled('form')({
  width: '100%',
  margin: '0 auto',
  boxSizing: 'border-box',
  maxWidth: '460px',
  padding: '20px',
  boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.19)',
  borderRadius: '4px'
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
