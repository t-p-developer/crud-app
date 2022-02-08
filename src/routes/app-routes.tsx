import * as React from 'react';

import { ProtectedRoutes } from './protected-routes';
import { PublicRoutes } from './public-routes';

export const AppRoutes = () => {
  const user = {
    name: 'John',
    lastName: 'Doe'
  };

  return !user ? <ProtectedRoutes /> : <PublicRoutes />;
};
