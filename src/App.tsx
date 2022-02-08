import * as React from 'react';

import { AppProvider } from './app-provider';
import { AppRoutes } from './routes/app-routes';

export const App = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);
