import { Smartphone, Tv, Gamepad2, Camera, Headphones, LayoutGrid } from 'lucide-react';
import { Category } from '../types/product';

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories = [
  { id: 'all' as Category, name: 'All Products', icon: LayoutGrid },
  { id: 'phones' as Category, name: 'Phones', icon: Smartphone },
  { id: 'tvs' as Category, name: 'TVs', icon: Tv },
  { id: 'gaming' as Category, name: 'Gaming', icon: Gamepad2 },
  { id: 'cameras' as Category, name: 'Cameras', icon: Camera },
  { id: 'audio' as Category, name: 'Audio', icon: Headphones },
];

export const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="bg-gray-900 py-8" id="categories">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onCategoryChange(id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                activeCategory === id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
