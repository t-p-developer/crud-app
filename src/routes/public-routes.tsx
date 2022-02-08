import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../pages/login-page/login-page';
import { PageNotFound } from '../pages/page-not-found/page-not-found';

export const PublicRoutes = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='*' element={<PageNotFound />} />
  </Routes>
);
