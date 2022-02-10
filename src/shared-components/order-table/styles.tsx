import { styled } from '@mui/material/styles';

export const PageContainer = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  padding: '24px',
  minHeight: '100vh',
  backgroundColor: theme.palette.grey[50]
}));
