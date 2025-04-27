import { useParams, useNavigate } from 'react-router-dom';
import { useProductContext } from './../context/ProductContext';
import { useEffect, useState } from 'react';
import { ProductService } from './../services/ProductService';
import { Product } from './../types/Product';
import ProductCard from '../components/shared/ProductCard.shc';

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProductContext();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      setError(null);

      const found = products.find((p) => p.id === Number(id));
      if (found) {
        setProduct(found);
        setLoading(false);
        return;
      }

      try {
        const response = await ProductService.fetchProductById(Number(id));
        setProduct(response);
      } catch (err: any) {
        setError(err.message || 'Product not found');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id, products]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center text-gray-500">Product not found</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white max-w-2xl w-full rounded-xl shadow-lg overflow-hidden">
        <ProductCard product={product} textBtn="Back" onClick={() => navigate(-1)} />
      </div>
    </div>
  );
}

export default ProductDetail;