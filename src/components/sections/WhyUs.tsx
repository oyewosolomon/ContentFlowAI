
import React, { useState, useEffect } from 'react';
import { Scan, Palette, Box, Star, Scale, Award, Leaf, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Why CustomFit Direct Section
const WhyCustomFit = () => {
    const features = [
      {
        icon: <Star className="w-6 h-6" />,
        title: "AI Precision",
        description: "Our advanced AI technology ensures accurate measurements for a flawless fit every time."
      },
      {
        icon: <Scale className="w-6 h-6" />,
        title: "Premium Quality",
        description: "Partnered with over 200 top-tier manufacturers to deliver high-quality custom clothing."
      },
      {
        icon: <Award className="w-6 h-6" />,
        title: "Fast and Reliable",
        description: "Receive your tailored garments within 2 weeks, backed by a 95% customer satisfaction rate."
      },
      {
        icon: <Leaf className="w-6 h-6" />,
        title: "Sustainability Commitment",
        description: "Custom clothing reduces waste by producing only what you need."
      }
    ];
  
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionizing Fashion with Technology</h2>
            <p className="text-xl text-gray-600">Experience the perfect blend of innovation and craftsmanship</p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full p-3 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default WhyCustomFit;
  