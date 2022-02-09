import { Container } from '@mui/material';
import * as React from 'react';

import { LoginFormController } from '../../feature-components/login-form-controller/login-form-controller';
import { PageContainer } from './styles';

export const LoginPage = () => (
  <PageContainer>
    <Container>
      <LoginFormController />
    </Container>
  </PageContainer>
);
