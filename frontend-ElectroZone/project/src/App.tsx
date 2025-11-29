import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductGrid } from './components/ProductGrid';
import { CountdownTimer } from './components/CountdownTimer';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { productApi } from './services/api';
import { Product, Category } from './types/product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(
          (product) => product.category.toLowerCase() === activeCategory
        )
      );
    }
  }, [activeCategory, products]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productApi.getAllProducts();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    setCartCount((prev) => prev + 1);
    setToast(`${product.name} added to cart!`);
  };

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header cartCount={cartCount} />

      <main className="pt-16">
        <Hero />
        <CountdownTimer />
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <section className="bg-black py-16" id="products">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Products
              </h2>
              <p className="text-gray-400 text-lg">
                Discover our handpicked selection of premium electronics
              </p>
            </div>

            <ProductGrid
              products={filteredProducts}
              loading={loading}
              onAddToCart={handleAddToCart}
            />
          </div>
        </section>
      </main>

      <Footer />

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}

export default App;
