import { Container } from '@mui/material';
import * as React from 'react';

import { LoginForm } from '../../shared-components/login-form/login-form';
import { PageContainer } from './styles';

export const LoginPage = () => (
  <PageContainer>
    <Container>
      <LoginForm />
    </Container>
  </PageContainer>
);
