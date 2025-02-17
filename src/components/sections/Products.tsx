import React, { useState } from 'react';
import { ChevronRight, Shirt, Rss, Watch } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SizeGuideModal from './SizeGuideModal';

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('mens');

  const categories = {
    mens: {
      title: "Men's Custom Clothing",
      icon: <Shirt className="w-6 h-6" />,
      products: [
        { 
          name: 'Custom Suits', 
          price: 'From $599', 
          image: 'https://tse1.mm.bing.net/th?id=OIP.3_KYeC025yAuQzJ--WBUEQHaJ4&pid=Api' 
        },
        { 
          name: 'Dress Shirts', 
          price: 'From $129', 
          image: 'https://tse1.mm.bing.net/th?id=OIP.3_KYeC025yAuQzJ--WBUEQHaJ4&pid=Api' 
        },
        { 
          name: 'Trousers', 
          price: 'From $149', 
          image: 'https://tse4.mm.bing.net/th?id=OIP.1ygAJUrIo7CfRbYA7x_8fwHaIi&pid=Api' 
        },
        { 
          name: 'Outerwear', 
          price: 'From $299', 
          image: 'https://tse1.mm.bing.net/th?id=OIP.FZtPvBXN36BLAh4SLZSE9wHaLH&pid=Api' 
        }
      ]
    },
    womens: {
      title: "Women's Custom Clothing",
      icon: <Rss className="w-6 h-6" />,
      products: [
        { 
          name: 'Custom Dresses', 
          price: 'From $299', 
          image: 'https://tse1.mm.bing.net/th?id=OIP.lkeWN7EiDMVEkgA7Wa6zUgHaNK&pid=Api' 
        },
        { 
          name: 'Blouses', 
          price: 'From $139', 
          image: 'https://tse1.mm.bing.net/th?id=OIP.lkeWN7EiDMVEkgA7Wa6zUgHaNK&pid=Api' 
        },
        { 
          name: 'Skirts', 
          price: 'From $159', 
          image: 'https://tse1.mm.bing.net/th?id=OIP.lkeWN7EiDMVEkgA7Wa6zUgHaNK&pid=Api' 
        },
        { 
          name: 'Pantsuits', 
          price: 'From $549', 
          image: 'https://tse1.mm.bing.net/th?id=OIP.lkeWN7EiDMVEkgA7Wa6zUgHaNK&pid=Api' 
        }
      ]
    },
    accessories: {
      title: "Accessories",
      icon: <Watch className="w-6 h-6" />,
      products: [
        { 
          name: 'Belts', 
          price: 'From $79', 
          image: 'https://tse1.mm.bing.net/th?id=OIP.3_KYeC025yAuQzJ--WBUEQHaJ4&pid=Api' 
        },
        { 
          name: 'Ties', 
          price: 'From $59', 
          image: 'https://tse1.mm.bing.net/th?id=OIP.3_KYeC025yAuQzJ--WBUEQHaJ4&pid=Api' 
        },
        { 
          name: 'Scarves', 
          price: 'From $69', 
          image: 'https://tse1.mm.bing.net/th?id=OIP.3_KYeC025yAuQzJ--WBUEQHaJ4&pid=Api' 
        }
      ]
    }
  };
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Shop Our Custom Collections</h2>
          <p className="text-xl text-gray-600">Tailored perfection for every style</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories[activeCategory as keyof typeof categories].products.map((product, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 flex items-center justify-center group">
                    Customize Now
                    <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Size Guide Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Need Help with Sizing?</h3>
          <p className="text-gray-600 mb-6">
            Our AI-powered size guide ensures the perfect fit for your custom garments
          </p>
         
          <SizeGuideModal />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;