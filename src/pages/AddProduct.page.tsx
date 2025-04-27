import { useState } from 'react';
import { ProductService } from './../services/ProductService';
import { useProductContext } from './../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const categories = ['Electronics', 'Clothing', 'Food'];

function AddProduct() {
  const { dispatch } = useProductContext();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; price?: string; category?: string; image?: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; price?: string; category?: string; image?: string } = {};
    if (!name.trim()) newErrors.name = 'Product name is required.';
    if (!price || isNaN(Number(price)) || Number(price) <= 0) newErrors.price = 'Price must be a positive number.';
    if (!category) newErrors.category = 'Please select a category.';
    if (!image.trim()) newErrors.image = 'Image URL is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const newProduct = {
        name,
        price: Number(price),
        category,
        image,
      };

      const createdProduct = await ProductService.addProduct(newProduct);
      dispatch({ type: 'ADD_PRODUCT', payload: createdProduct });
      navigate('/products');
    } catch (err) {
      console.error('Failed to add product:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">Add New Product 🛍️</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Product Name</label>
            <input
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Price (฿)</label>
            <input
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
            />
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Category</label>
            <select
              className="w-full border border-gray-300 rounded-md p-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Image URL</label>
            <input
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL"
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-md transition disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;