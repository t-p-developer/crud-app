import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Blog } from '../pages/blog';
import { PageNotFound } from '../pages/page-not-found/page-not-found';

export const ProtectedRoutes = () => (
  <Routes>
    <Route path='/' element={<Navigate to='/blog' />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='*' element={<PageNotFound />} />
  </Routes>
);
