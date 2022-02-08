import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import ErrorBoundaryPicture from '../assets/images/error-boundary.svg';
import { buttonConstants, generalConstants } from '../utils/constants';
import { ContentWrapper, InfoContainer, LogoContainer, PageContainer } from './styles';

export const ErrorBoundaryFallback = () => (
  <PageContainer>
    <InfoContainer>
      <ContentWrapper>
        <Typography variant='h2'>{generalConstants.ERROR_BOUNDARY}</Typography>
      </ContentWrapper>
      <ContentWrapper>
        <Typography variant='subtitle1'>{generalConstants.ERROR_BOUNDARY_DESCRIPTION}</Typography>
      </ContentWrapper>
      <ContentWrapper>
        <Button
          onClick={() => window.location.assign(window.location.origin)}
          variant='contained'
          color='primary'
          size='large'
          endIcon={<RefreshOutlinedIcon />}
        >
          {buttonConstants.RELOAD_THE_PAGE}
        </Button>
      </ContentWrapper>
    </InfoContainer>
    <LogoContainer style={{ backgroundImage: `url(${ErrorBoundaryPicture})` }} />
  </PageContainer>
);
