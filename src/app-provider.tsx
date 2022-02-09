import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { theme } from './assets/theme';
import { ErrorBoundaryFallback } from './pages/error-boundary-fallback';

const queryClient = new QueryClient();

export const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </ThemeProvider>
);
