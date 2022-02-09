import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../pages/login-page/login-page';

export const PublicRoutes = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
