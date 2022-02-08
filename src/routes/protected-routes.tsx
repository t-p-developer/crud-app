import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Blog } from '../pages/blog';
import { PageNotFound } from '../pages/page-not-found';

export const ProtectedRoutes: React.FC = () => (
  <Routes>
    <Route path='/blog' element={<Blog />} />
    <Route path='*' element={<PageNotFound />} />
  </Routes>
);
