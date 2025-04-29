import { ProductModel } from "../../types/Product.model";

type ProductCardProps = { 
  product: ProductModel, 
  textBtn: string; 
  onClick?: () => void 
};

function ProductCard({ product, textBtn, onClick }: ProductCardProps) {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* รูปสินค้า */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={product.image || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* ข้อมูลสินค้า */}
      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-xl font-semibold text-indigo-700 mb-2 truncate">{product.name}</h2>
        <p className="text-gray-600 mb-1 text-lg">฿ {product.price.toLocaleString()}</p>
        <p className="text-sm text-gray-400 mb-4">Category: {product.category}</p>

        <button
          className="mt-auto w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md transition"
          onClick={onClick}
        >
          {textBtn}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;