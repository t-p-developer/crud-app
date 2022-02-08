import { styled } from '@mui/material/styles';

import BackgroundImg from '../../assets/images/bg-img.jpg';

export const PageContainer = styled('div')({
  width: '100%',
  height: '100%',
  minHeight: '100%',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${BackgroundImg})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat'
});
