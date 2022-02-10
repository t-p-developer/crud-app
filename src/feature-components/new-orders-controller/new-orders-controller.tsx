import * as React from 'react';

import { useNewOrders } from '../../adapters/orders/orders';
import { normalizeResponse } from '../../utils/helper-fn';

const NewOrdersContext = React.createContext({});
NewOrdersContext.displayName = 'NewOrdersContext';

const NewOrdersControllerProvider = ({ children }: { children: React.ReactNode }) => {
  const newOrderListState = normalizeResponse(useNewOrders());
  return (
    <NewOrdersContext.Provider
      value={{
        newOrderListState
      }}
    >
      {children}
    </NewOrdersContext.Provider>
  );
};

const useNewOrdersContext = () => {
  const context = React.useContext(NewOrdersContext);

  if (context === undefined) {
    throw new Error('It can be used only with a NewOrdersControllerProvider');
  }

  return context;
};

export { NewOrdersControllerProvider, useNewOrdersContext };
