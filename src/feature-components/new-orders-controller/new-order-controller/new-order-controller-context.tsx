import * as React from 'react';

import { NewOrderControllerProvider } from './new-order-controller';

export const NewOrderControllerContext = ({ children }: { children: React.ReactNode }) => (
  <NewOrderControllerProvider>{children}</NewOrderControllerProvider>
);
