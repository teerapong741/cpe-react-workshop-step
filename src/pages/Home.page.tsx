function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-12">
      <div className="text-center max-w-3xl space-y-8 animate-fade-in-up">
        
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
          Welcome to <span className="text-yellow-300">Simple Shop</span> 🛍️
        </h1>

        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
          Simplify your product management and grow your business faster with our easy-to-use platform.
        </p>

        <a
          href="/products"
          className="inline-block px-8 py-4 bg-yellow-400 text-indigo-800 font-bold text-lg rounded-full hover:scale-105 hover:bg-yellow-300 transition transform shadow-lg"
        >
          🚀 Get Started
        </a>
      </div>
    </div>
  );
}

export default HomePage;