import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Package, Timer, CheckCircle, Bell,
  Truck, Plane, Building, ShoppingBag, Hospital,
  Coffee, Store, LineChart, Users, Leaf
} from 'lucide-react';


const PartnershipsSection = () => {
  const benefits = [
    {
      title: "Cutting-Edge Technology",
      description: "Access to our advanced autonomous delivery platform",
      icon: <LineChart className="w-8 h-8" />
    },
    {
      title: "Customer Satisfaction",
      description: "Enhanced delivery experience for your customers",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id='partners'>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join the Autonomous Delivery Revolution</h2>
          <p className="text-xl text-gray-600">Partner with us to transform the future of delivery</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-blue-600 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold inline-flex items-center gap-2 hover:bg-blue-700 transition-colors">
            Become a Partner <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
