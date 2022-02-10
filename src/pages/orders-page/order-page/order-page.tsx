import * as React from 'react';

// eslint-disable-next-line max-len
import { NewOrderControllerContext } from '../../../feature-components/new-orders-controller/new-order-controller/new-order-controller-context';
import { OrderDetails } from '../../../shared-components/order-details/order-details';

export const OrderPage = () => (
  <NewOrderControllerContext>
    <OrderDetails />
  </NewOrderControllerContext>
);
