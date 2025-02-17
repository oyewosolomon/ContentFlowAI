
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Package, Timer, CheckCircle, Bell,
  Truck, Plane, Building, ShoppingBag, Hospital,
  Coffee, Store, LineChart, Users, Leaf
} from 'lucide-react';


const SustainabilitySection = () => {
    return (
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white" id='sustainability'>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Commitment to a Greener Future</h2>
              <p className="text-xl text-green-100 mb-8">
                By replacing traditional delivery vehicles with autonomous robots and drones, 
                we're reducing carbon emissions and traffic congestion in urban areas.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <Leaf className="w-8 h-8 mb-4 text-green-400" />
                  <div className="text-3xl font-bold mb-2">30%</div>
                  <div className="text-green-100">Carbon Emission Reduction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <LineChart className="w-8 h-8 mb-4 text-green-400" />
                  <div className="text-3xl font-bold mb-2">1M+</div>
                  <div className="text-green-100">Miles Saved Annually</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 relative z-10"
              >
                <h3 className="text-2xl font-semibold mb-6">Sustainability Goals</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                    <span>Zero-emission autonomous delivery fleet by 2025</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                    <span>Reducing urban congestion through optimized routing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                    <span>Supporting local initiatives for sustainable urban development</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default SustainabilitySection;
  