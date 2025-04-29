function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-indigo-600 font-semibold mt-4">Loading Page...</p>
      </div>
    </div>
  );
}

export default LoadingPage;