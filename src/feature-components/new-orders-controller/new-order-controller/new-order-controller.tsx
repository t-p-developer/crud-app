import * as React from 'react';
import { useParams } from 'react-router-dom';

import { useNewOrder } from '../../../adapters/orders/orders';
import { normalizeResponse } from '../../../utils/helper-fn';

const NewOrderContext = React.createContext({});

NewOrderContext.displayName = 'NewOrderContext';

const NewOrderControllerProvider = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();

  const newOrderState = normalizeResponse(useNewOrder({ id: params.id }));
  return <NewOrderContext.Provider value={{ newOrderState }}>{children}</NewOrderContext.Provider>;
};

const useNewOrderContext = () => {
  const context = React.useContext(NewOrderContext);

  if (context === undefined) {
    throw new Error('It can be used only with a NewOrderControllerProvider');
  }

  return context;
};

export { NewOrderControllerProvider, useNewOrderContext };
