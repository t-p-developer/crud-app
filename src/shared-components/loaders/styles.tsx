import { styled } from '@mui/material/styles';

export const LargeOverlay = styled('div')({
  position: 'fixed',
  left: 0,
  top: 0,
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  zIndex: 1000000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#FFFFFF'
});
