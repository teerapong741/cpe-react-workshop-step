import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/shared/Navbar.shc';
import { AuthProvider } from './context/AuthContext';
import { Suspense } from 'react';

function AppRoutes() {
  const element = useRoutes(routes);
  return <Suspense fallback={<p>Loading Page...</p>}>{element}</Suspense>;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <Navbar />
          <AppRoutes />
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;