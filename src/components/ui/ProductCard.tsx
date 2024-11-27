import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
      <div className="aspect-square mb-4 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-medium mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium">
          ${product.price.toFixed(2)}
        </span>
        <button 
          onClick={() => onAddToCart(product.id)}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}