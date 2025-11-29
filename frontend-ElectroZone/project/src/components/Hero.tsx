import { Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold animate-bounce">
            <Zap className="w-4 h-4" />
            BLACK FRIDAY 2024
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Epic Deals on
            <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Premium Electronics
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Up to 70% off on phones, TVs, gaming gear, cameras and more. Limited time only.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#products"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Shop Now
            </a>
            <a
              href="#deals"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all"
            >
              View Deals
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-red-500">70%</div>
              <div className="text-sm text-gray-400">Max Discount</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-500">24h</div>
              <div className="text-sm text-gray-400">Flash Sales</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-500">Free</div>
              <div className="text-sm text-gray-400">Shipping</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-500">2Y</div>
              <div className="text-sm text-gray-400">Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
