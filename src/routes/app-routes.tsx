import * as React from 'react';

import { useUser } from '../adapters/user/user';
import { useLoginContext } from '../feature-components/login-form-controller/login-form-controller';
import { LargeSpinner } from '../shared-components/loaders/large-loader';
import { ProtectedRoutes } from './protected-routes';
import { PublicRoutes } from './public-routes';

export const AppRoutes = () => {
  const { data } = useLoginContext();

  const { isLoading: isUserLoading, data: userData } = useUser();

  if (isUserLoading) {
    return <LargeSpinner />;
  }

  return data || userData ? <ProtectedRoutes /> : <PublicRoutes />;
};
