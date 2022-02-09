import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { OrderTable } from '../pages/order-table/order-table';
import { PageNotFound } from '../pages/page-not-found/page-not-found';

export const ProtectedRoutes = () => (
  <Routes>
    <Route path='/' element={<Navigate to='/blog' />} />
    <Route path='blog' element={<OrderTable />} />
    <Route path='*' element={<PageNotFound />} />
  </Routes>
);
