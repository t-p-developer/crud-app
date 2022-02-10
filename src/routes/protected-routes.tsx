import Button from '@mui/material/Button';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useLoginContext } from '../feature-components/login-form-controller/login-form-controller';
import { OrderPage } from '../pages/orders-page/order-page/order-page';
import { OrdersPage } from '../pages/orders-page/orders-page';
import { PageNotFound } from '../pages/page-not-found/page-not-found';

export const ProtectedRoutes = () => {
  const { handleLogOut } = useLoginContext();

  return (
    <>
      <Button type='button' sx={{ position: 'absolute', right: '20px', top: '20px' }} onClick={() => handleLogOut()}>
        Log out
      </Button>
      <Routes>
        <Route path='/' element={<Navigate to='/order-table' />} />
        <Route path='/order-table' element={<OrdersPage />} />
        <Route path='/order-table/:id' element={<OrderPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};
