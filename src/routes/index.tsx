import { RouteObject } from 'react-router-dom';
import React from 'react';
import ProtectedRoute from '../core/guards/ProtectedRoute';

const HomePage = React.lazy(() => import('../pages/Home.page'));
const ProductListPage = React.lazy(() => import('../pages/ProductList.page'));
const ProductDetailPage = React.lazy(() => import('../pages/ProductDetail.page'));
const AddProductPage = React.lazy(() => import('../pages/AddProduct.page'));
const LoginPage = React.lazy(() => import('../pages/Login.page'));
const NotFoundPage = React.lazy(() => import('../pages/NotFound404.page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/products',
    element: <ProductListPage />,
  },
  {
    path: '/products/:id',
    element: <ProductDetailPage />,
  },
  {
    path: '/products/add',
    element: (
      <ProtectedRoute>
        <AddProductPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;