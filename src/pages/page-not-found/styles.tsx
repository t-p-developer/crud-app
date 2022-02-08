import { styled } from '@mui/material/styles';

import NotFoundImage from '../../assets/images/page-not-found.svg';

export const PageContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  minHeight: '100%',
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    flexFlow: 'column nowrap'
  }
}));

export const InfoContainer = styled('div')(({ theme }) => ({
  flex: '0 0 40%',
  padding: '10px 93px',
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'relative',
  [theme.breakpoints.down('lg')]: {
    padding: '10px 20px',
    height: '50%',
    alignItems: 'center',
    textAlign: 'center'
  }
}));

export const ContentWrapper = styled('div')({
  padding: '15px 0'
});

export const LogoContainer = styled('div')(({ theme }) => ({
  height: '100%',
  flex: '0 0 60%',
  backgroundImage: `url(${NotFoundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
  backgroundColor: theme.palette.grey[50],
  boxShadow: 'inset 0 5px 16px 0 rgba(0, 0, 0, 0.09)',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    height: '50%'
  }
}));
