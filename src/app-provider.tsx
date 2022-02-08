import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { theme } from './assets/theme';
import { ErrorBoundaryFallback } from './pages/error-boundary-fallback';

export const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <BrowserRouter>{children}</BrowserRouter>
    </ErrorBoundary>
  </ThemeProvider>
);
