import * as React from 'react';

// eslint-disable-next-line max-len
import { NewOrdersControllerContext } from '../../feature-components/new-orders-controller/new-orders-controller-context';
import { OrderTable } from '../../shared-components/order-table/order-table';

export const OrdersPage = () => (
  <NewOrdersControllerContext>
    <OrderTable />
  </NewOrdersControllerContext>
);
