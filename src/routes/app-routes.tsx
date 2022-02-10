import * as React from 'react';

import { useLoginContext } from '../feature-components/login-form-controller/login-form-controller';
import { LargeSpinner } from '../shared-components/loaders/large-loader';
import { ProtectedRoutes } from './protected-routes';
import { PublicRoutes } from './public-routes';

export const AppRoutes = () => {
  const { data, isLoading } = useLoginContext();

  if (isLoading) {
    return <LargeSpinner />;
  }

  return data ? <ProtectedRoutes /> : <PublicRoutes />;
};
