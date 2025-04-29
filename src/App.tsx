import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes';
import { ProductStoreProvider } from './stores/product.store';
import Navbar from './components/shared/Navbar.shc';
import { AuthStoreProvider } from './stores/auth.store';
import { Suspense } from 'react';
import FullPageLoader from './pages/Loading.page';

function AppRoutes() {
  const element = useRoutes(routes);
  return (
    <Suspense fallback={<FullPageLoader />}>
      {element}
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthStoreProvider>
        <ProductStoreProvider>
          <Navbar />
          <AppRoutes />
        </ProductStoreProvider>
      </AuthStoreProvider>
    </BrowserRouter>
  );
}

export default App;