import * as React from 'react';

import { NewOrdersControllerProvider } from './new-orders-controller';

export const NewOrdersControllerContext = ({ children }: { children: React.ReactNode }) => (
  <NewOrdersControllerProvider>{children}</NewOrdersControllerProvider>
);
