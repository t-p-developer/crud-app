import Button from '@mui/material/Button';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useLoginContext } from '../feature-components/login-form-controller/login-form-controller';
import { OrderPage } from '../pages/orders-page/order-page/order-page';
import { OrdersPage } from '../pages/orders-page/orders-page';
import { PageNotFound } from '../pages/page-not-found/page-not-found';
import { buttonConstants } from '../utils/constants';

export const ProtectedRoutes = () => {
  const { handleLogOut } = useLoginContext();

  return (
    <>
      <Button type='button' sx={{ position: 'absolute', right: '20px', top: '20px' }} onClick={() => handleLogOut()}>
        {buttonConstants.LOG_OUT}
      </Button>
      <Routes>
        <Route path='/' element={<Navigate to='/new-orders' />} />
        <Route path='/new-orders' element={<OrdersPage />} />
        <Route path='/new-orders/:id' element={<OrderPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};
