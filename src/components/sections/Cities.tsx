import React, { useState } from 'react';
import { 
  ArrowRight, Package, Clock, Database, Globe, Mail, Phone, 
  MapPin, CheckCircle, TrendingUp, Users, Heart, Zap,
  Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';


// Cities Section
const CitiesSection = () => {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Bringing Local Retailers Closer to You
          </h2>
  
          <div className="bg-gray-100 rounded-xl p-8 mb-12">
            {/* Placeholder for map */}
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <MapPin className="h-12 w-12 text-indigo-600" />
              <span className="ml-2 text-gray-600">Interactive Map Coming Soon</span>
            </div>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                <span className="text-gray-600">Major City {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default CitiesSection