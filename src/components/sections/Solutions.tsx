
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ChevronDown, BarChart, Clock, 
  Fuel, Database, Building2, Users, Car,
  LineChart, Mail, Phone, MapPin, LinkedinIcon,
  TwitterIcon, FacebookIcon
} from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Building2,
      title: "For City Planners",
      description: "Data-driven insights for smarter urban mobility decisions."
    },
    {
      icon: Car,
      title: "For Transit Operators",
      description: "Efficient fleet management with real-time monitoring and route optimization."
    },
    {
      icon: Users,
      title: "For Passengers",
      description: "Accurate arrival times and reduced wait times for a seamless commuting experience."
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center p-6">
              <solution.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
