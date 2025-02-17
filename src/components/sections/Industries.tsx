import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Package, Timer, CheckCircle, Bell,
  Truck, Plane, Building, ShoppingBag, Hospital,
  Coffee, Store, LineChart, Users, Leaf
} from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      title: "E-Commerce",
      icon: <ShoppingBag className="w-8 h-8" />,
      description: "Speed up delivery times and enhance customer satisfaction."
    },
    {
      title: "Healthcare",
      icon: <Hospital className="w-8 h-8" />,
      description: "Deliver medical supplies and prescriptions quickly and reliably."
    },
    {
      title: "Food & Beverage",
      icon: <Coffee className="w-8 h-8" />,
      description: "Keep meals fresh and hot with fast, efficient delivery."
    },
    {
      title: "Retail",
      icon: <Store className="w-8 h-8" />,
      description: "Offer same-day delivery options to stay competitive."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600">Tailored solutions for diverse business needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

  
  export default IndustriesSection;