import { styled } from '@mui/material/styles';

export const PageContainer = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  padding: '24px',
  minHeight: '100vh',
  backgroundColor: theme.palette.grey[50],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const InfoBox = styled('form')({
  boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.19)',
  borderRadius: '4px',
  width: '550px',
  padding: '20px'
});

export const ErrorContent = styled('div')({
  padding: '20px',
  borderRadius: '4px',
  width: '550px'
});
