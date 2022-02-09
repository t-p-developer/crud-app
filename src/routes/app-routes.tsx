import * as React from 'react';

import { useUser } from '../adapters/user/user';
import LargeSpinner from '../shared-components/loaders/large-loader';
import { ProtectedRoutes } from './protected-routes';
import { PublicRoutes } from './public-routes';

export const AppRoutes = () => {
  const user = useUser();

  if (user?.isLoading) {
    return <LargeSpinner />;
  }

  // @ts-ignore
  return user?.data?.message?.success ? <ProtectedRoutes /> : <PublicRoutes />;
};
