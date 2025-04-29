import { useEffect, useState, useMemo, useCallback } from 'react';
import { ProductService } from '../services/product.service';
import { Link, Outlet } from 'react-router-dom';
import ProductCard from '../components/shared/ProductCard.shc';
import { useProductContext } from '../hooks/UseProductContact.hook';

function ProductListPage() {
  const { products, dispatch } = useProductContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await ProductService.getProductList();
      dispatch({ type: 'SET_PRODUCTS', payload: result });
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [products, searchText]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredProducts.length / itemsPerPage);
  }, [filteredProducts.length]);

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Outlet />
      <h1 className="text-3xl font-bold mb-8 text-center text-indigo-700">Product List 🛍️</h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div className="p-4 h-full flex flex-col">
              <ProductCard product={product} textBtn="View Details" />
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length > itemsPerPage && (
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded disabled:opacity-50 transition shadow"
          >
            Prev
          </button>

          <span className="font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded disabled:opacity-50 transition shadow"
          >
            Next
          </button>
        </div>
      )}

      {filteredProducts.length === 0 && !loading && !error && (
        <p className="text-center text-gray-500 mt-8">No products found.</p>
      )}
    </div>
  );
}

export default ProductListPage;