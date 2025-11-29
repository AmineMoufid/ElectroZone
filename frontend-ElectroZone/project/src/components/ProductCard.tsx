import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="group bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden bg-gray-800">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.discount && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{product.discount}%
          </div>
        )}
        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Only {product.stock} left!
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
            {product.category}
          </div>
          <h3 className="text-white font-semibold text-lg line-clamp-2 group-hover:text-red-500 transition-colors">
            {product.name}
          </h3>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < 4 ? 'fill-yellow-500 text-yellow-500' : 'text-gray-600'}`}
            />
          ))}
          <span className="text-gray-500 text-sm ml-2">(4.5)</span>
        </div>

        <div className="flex items-end justify-between pt-4 border-t border-gray-800">
          <div>
            {product.discount ? (
              <div>
                <div className="text-gray-500 text-sm line-through">${product.price.toFixed(2)}</div>
                <div className="text-white text-2xl font-bold">${discountedPrice.toFixed(2)}</div>
              </div>
            ) : (
              <div className="text-white text-2xl font-bold">${product.price.toFixed(2)}</div>
            )}
          </div>

          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className={`p-3 rounded-full transition-all transform hover:scale-110 ${
              product.stock === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/50'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
