import { RouteObject } from 'react-router-dom';
import AddProduct from '../pages/AddProduct.page';
import Home from '../pages/Home.page';
import Login from '../pages/Login.page';
import Products from '../pages/Products.page';
import ProtectedRoute from './ProtectedRoute';
import ProductDetail from '../pages/ProductDetail';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/products/:id',
    element: <ProductDetail />,
  },
  {
    path: '/products/add',
    element: (
      <ProtectedRoute>
        <AddProduct />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
];

export default routes;