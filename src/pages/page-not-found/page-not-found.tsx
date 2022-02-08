import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { generalConstants } from '../../utils/constants';
import { ContentWrapper, InfoContainer, LogoContainer, PageContainer } from '../styles';

export const PageNotFound = () => (
  <PageContainer>
    <InfoContainer>
      <ContentWrapper>
        <Typography variant='h2'>{generalConstants.PAGE_NOT_FOUND}</Typography>
      </ContentWrapper>
      <ContentWrapper>
        <Typography variant='subtitle1'>{generalConstants.PAGE_NOT_FOUND_DESCRIPTION}</Typography>
      </ContentWrapper>
      <ContentWrapper>
        <Button
          component={RouterLink}
          to='/'
          variant='contained'
          color='primary'
          size='large'
          endIcon={<HomeOutlinedIcon />}
        >
          {generalConstants.TAKE_ME_HOME}
        </Button>
      </ContentWrapper>
    </InfoContainer>
    <LogoContainer />
  </PageContainer>
);
