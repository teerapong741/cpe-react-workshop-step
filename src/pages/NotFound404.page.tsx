function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-700 p-6">
      <h1 className="text-7xl font-bold mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Oops! Page not found.
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-semibold transition shadow-md"
      >
        ← Go Back Home
      </a>
    </div>
  );
}

export default NotFoundPage;