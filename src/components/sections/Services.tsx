import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Package, Timer, CheckCircle, Bell,
  Truck, Plane, Building, ShoppingBag, Hospital,
  Coffee, Store, LineChart, Users, Leaf
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Autonomous Robot Deliveries",
      description: "Ground-based robots designed to navigate urban landscapes with precision.",
      icon: <Truck className="w-8 h-8" />,
      features: ["Real-time tracking", "Secure compartments", "Eco-friendly"]
    },
    {
      title: "Drone Deliveries",
      description: "Sky-based delivery for faster, long-distance transportation of urgent packages.",
      icon: <Plane className="w-8 h-8" />,
      features: ["30-minute delivery", "Safe navigation", "Medical & food suitable"]
    },
    {
      title: "Custom Solutions",
      description: "Tailored delivery solutions meeting unique business requirements.",
      icon: <Building className="w-8 h-8" />,
      features: ["Business integration", "API access", "24/7 support"]
    }
  ];

  return (
    <section className="py-20 bg-white" id='services'>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Revolutionizing last-mile delivery with cutting-edge technology</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;