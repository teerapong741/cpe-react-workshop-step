import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/UseAuth.hook';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md">
      <div className="text-2xl font-extrabold tracking-wide text-white">
        Simple Shop
      </div>

      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-white text-lg font-medium hover:text-gray-200 transition"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-white text-lg font-medium hover:text-gray-200 transition"
        >
          Products
        </Link>
        <Link
          to="/products/add"
          className="text-white text-lg font-medium hover:text-gray-200 transition"
        >
          Add Product
        </Link>

        {!isAuthenticated ? (
          <Link to="/login">
            <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 shadow transition">
              Login
            </button>
          </Link>
        ) : (
          <button
            onClick={logout}
            className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 shadow transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;